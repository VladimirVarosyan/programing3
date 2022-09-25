let LivingCreature = require("./LivingCreature")


module.exports = class Grass extends LivingCreature{
    

      mul(){
            this.multiply++
             var emptyCell  =  this.chooseCell(0);
             var newCell  =    random(emptyCell);

                   if(newCell && this.multiply >= 5){
                          
                            var newX = newCell[0];
                            var newY = newCell[1];

                                matrix[newY][newX] = 1;

                                var pe = new Grass(newX,newY); 

                                grassArr.push(pe);

                                this.multiply = 0;
                         
                   }
      }
}