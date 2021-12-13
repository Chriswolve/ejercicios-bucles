/* Desarrolle un programa realice una suma de matrices cuadradas.

  */

let rows = 3,
  cols = 3;
let matrixA = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 7],
];
let matrixB = [
  [5, 8, 6],
  [4, 3, 4],
  [7, 3, 9],
];
let matrixS = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    matrixS[i][j] = matrixA[i][j] + matrixB[i][j];
  }
}

console.log(matrixS);
