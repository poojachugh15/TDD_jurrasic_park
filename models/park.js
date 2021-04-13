const Park = function (name, ticket_price, dinosaurs) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = dinosaurs;
  };

  Park.prototype.add_Dinosaur = function(new_Dinosaur){
      this.dinosaurs.push(new_Dinosaur);

  };

  Park.prototype.remove_Dinosaur = function(rm_Dinosaur){
      this.dinosaurs.pop(rm_Dinosaur);
  };

  Park.prototype.most_Visited = function(){
      let sort_Dinosaurs = this.dinosaurs.sort((first, second)  => first.guestsAttractedPerDay - second.guestsAttractedPerDay);
      return sort_Dinosaurs.pop();
  };

  Park.prototype.particular_Species = function(species){
      return this.dinosaurs.filter(dinosaur => dinosaur.species === species);

  };

  Park.prototype.visitors_Per_Day = function(){
      let Visitors = 0;
      for (let v = 0; v < this.dinosaurs.length; v++){
          Visitors += this.dinosaurs[v].guestsAttractedPerDay;
      };
      return Visitors;
  }

  Park.prototype.visitors_Per_Year = function(){
      let per_day_Visitors = 0;
      let days_In_Year = 365;

      for (let v = 0; v < this.dinosaurs.length; v++){
          per_day_Visitors += this.dinosaurs[v].guestsAttractedPerDay;
      };
      return per_day_Visitors * days_In_Year;
  }
   Park.prototype.total_Revenue = function(){
       let total_Visitors = this.visitors_Per_Year();
       return this.ticket_price * total_Visitors;
   }

  
  module.exports = Park;
  