var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);


function matrixGenerator(matrixSize,grassCount,grasseaterCount,predatorCount, omnivorousCount,  coronavirusCount){
   let matrix = [];

     for(let i = 0; i < matrixSize;i++){
             matrix[i] = []
         for(let j = 0; j < matrixSize; j++){
                 matrix[i][j] = 0;
         }
     }

     for(let i = 0 ; i < grassCount; i++ ){
           
          let x  = Math.floor(Math.random() * matrixSize)
          let y  = Math.floor(Math.random() * matrixSize)

                if(matrix[y][x] == 0){
                    matrix[y][x] = 1;
                }

     }

     for(let i = 0 ; i < grasseaterCount; i++ ){
           
        let x  = Math.floor(Math.random() * matrixSize)
        let y  = Math.floor(Math.random() * matrixSize)

              if(matrix[y][x] == 0){
                  matrix[y][x] = 2;
              }

   }
   for(let i = 0 ; i < predatorCount; i++ ){
           
        let x  = Math.floor(Math.random() * matrixSize)
        let y  = Math.floor(Math.random() * matrixSize)

              if(matrix[y][x] == 0){
                  matrix[y][x] = 3;
              }

   }

   for(let i = 0 ; i <  omnivorousCount; i++ ){
           
     let x  = Math.floor(Math.random() * matrixSize)
     let y  = Math.floor(Math.random() * matrixSize)

           if(matrix[y][x] == 0){
               matrix[y][x] = 4;
           }

}


for(let i = 0 ; i <  coronavirusCount; i++ ){
           
 let x  = Math.floor(Math.random() * matrixSize)
 let y  = Math.floor(Math.random() * matrixSize)

       if(matrix[y][x] == 0){
           matrix[y][x] = 5;
       }
 

}



return matrix ;     
}


matrix = matrixGenerator(20,15,20,25,15,10);

io.sockets.emit('send matrix',matrix)

grassArr = []
 grasseaterArr = []
 predatorArr = []
 omnivorousArr = []
 coronavirusArr = []


 Grass = require("./grass")
 GrassEater = require("./grasseater")
 Predator = require("./predator")
 Omnivorous = require("./omnivorous")
 Coronavirus = require("./coronavirus")


 function createObject(matrix)
 {for (var y = 0; y < matrix.length; y++) {
   for (var x = 0; x < matrix[y].length; x++) {
       if (matrix[y][x] == 1) {
           var grassArr = new Grass(x, y)

           grassArr.push(grass)
       } else if (matrix[y][x] == 2) {
           var grasseater = new GrassEater(x, y)
           grasseaterArr.push(grasseater)

       } else if (matrix[y][x] == 3) {
           var predator = new Predator(x, y)

           predatorArr.push(predator)
       }

       else if (matrix[y][x] == 4) {
           var omnivorous = new Omnivorous(x, y)

           omnivorousArr.push(omnivorous)
       }

       else if (matrix[y][x] == 5) {
           var coronavirus = new Coronavirus(x, y)

           coronavirusArr.push(coronavirus)
       }
   }
}

io.socket.emit('send matrix', matrix)

}

function game(){
   for (var i in grassArr) {
      grassArr[i].mul()
  }

  for (let j in grasseaterArr) {
      grasseaterArr[j].mul()
      grasseaterArr[j].eat()
  }

  for (let j in predatorArr) {
      predatorArr[j].mul()
      predatorArr[j].eat()
  }

  for (let j in omnivorousArr) {
      omnivorousArr[j].mul()
      omnivorousArr[j].eat()
  }

  for (let j in coronavirusArr) {
      coronavirusArr[j].mul()
      coronavirusArr[j].eat()
  }
}

io.socket.emit('send matrix',matrix)



setInterval(game,200)

io.on('connection',function (){
   createObject(matrix)
})