const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  
  let park;


  beforeEach(function () {

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Brachiosaurus', 'herbivore', 35);
    dinosaur3 = new Dinosaur('Triceratops', 'herbivore', 45);

    dinosaur4 = new Dinosaur('Gallimimus', 'herbivore', 20);

    dinosaurs =[dinosaur1, dinosaur2, dinosaur3];

    park = new Park('Jurassic Park', 600, dinosaurs);

  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 600);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.add_Dinosaur(dinosaur4);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.remove_Dinosaur(dinosaur3);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.most_Visited();
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.dinosaurs.push(dinosaur4);
    park.dinosaurs.push(dinosaur4);
    park.dinosaurs.push(dinosaur4);

    let list_Dinasaurs = [dinosaur4, dinosaur4, dinosaur4];
    const actual = park.particular_Species('Gallimimus');
    assert.deepStrictEqual(actual, list_Dinasaurs);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    
    const actual = park.visitors_Per_Day();
    assert.strictEqual(actual, 130);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.visitors_Per_Year();
    assert.strictEqual(actual, (365 * 130));
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.total_Revenue();
    assert.strictEqual(actual, (365 * 130 * 600));
  });

});
