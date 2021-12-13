/* Desarrolle un programa que muestre los 50 primeros numeros primos.

    * Los numeros primos deben almacenarse en un arreglo
    * Mostrar por consola el arreglo = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41 ...
  */

var n = 50;
let numero = 1;
var numerosPrimos = [];

while (n > 0) {
  let divisores = 0;
  // Calculamos la cantidad de divisores que tiene numero
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      divisores++;
    }
  }
  // Si tiene mas de dos divisores no es un numero primo
  if (divisores < 2) {
    /* numero primo encontrado */
    numerosPrimos.push(numero);
    n = n - 1; // reducimos la cantidad de numeros a mostrar
  }
  numero++; // El numero se seguira incrementando hasta que n sea = 0
}

console.log(numerosPrimos);
