//index.js
//*-------------------------------------------------------*
//| Name: index.js                                        |
//| Description: print 10 triangles, 10 squares, and 10   |
//| rhombi of sizes of your choosing                      |
//| Author: Alex Supkay                                   |
//| Pledge: I pledge my honor that I have abided by the   |
//| Stevens Honor System.                                 |
//*-------------------------------------------------------*

//Import my printshape module
const shapePrinter = require("./printShape.js");

//Print triangles of size ranging from 1 to 10
console.log("-------------------------------");
console.log("|          Triangle           |");
console.log("-------------------------------");
for(let triangleSize = 1; triangleSize <= 10; triangleSize++) {
    console.log(`--Triangle of Size ${triangleSize}--`);
    shapePrinter.triangle(triangleSize);
}

//Print squares ranging from 1 to 10
console.log("-------------------------------");
console.log("|           Square            |");
console.log("-------------------------------");
for(let squareSize = 2; squareSize <= 11; squareSize++) { 
    console.log(`--Square of Size ${squareSize}--`);
    shapePrinter.square(squareSize);
}

//Print rhombuses ranging from 1 to 10
console.log("-------------------------------");
console.log("|           Rhombus           |");
console.log("-------------------------------");
for(let rhombusSize = 2; rhombusSize <= 20; rhombusSize = rhombusSize + 2) {
    console.log(`--Rhombus of Size ${rhombusSize}--`);
    shapePrinter.rhombus(rhombusSize);
}
