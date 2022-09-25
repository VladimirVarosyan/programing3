var socket = io()

console.log(matrix);

var side = 35;



function setup() {
    frameRate(10)
    createCanvas(20 * side, 20 * side);

    


function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.1
            textSize(toBot);
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side);
                text(x * side, y * side + toBot)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side);
                text(x * side, y * side + toBot)
            } else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side);
                text(x * side, y * side + toBot)
            } else if (matrix[y][x] == 4) {
                fill("blue")
                rect(x * side, y * side, side, side);
                text(x * side, y * side + toBot)
            } else if (matrix[y][x] == 5) {
                fill("black")
                rect(x * side, y * side, side, side);
                text(x * side, y * side + toBot)
            } else {
                fill("gray")
                rect(x * side, y * side, side, side);
            }

        }
    }
}
}



setInterval(
    function(){
        socket.on('send matrix', nkarel)
    },1000
)