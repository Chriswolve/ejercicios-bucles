/* Desarrolle un programa que realice la sumatoria de la siguiente ecuación (Suma gaussiana).
    Σ = (n*(n+1))/2  para un n:{0 ... 12 } 

    * Mostrar por consola : La sumatoria resultante
    * Mostrar la sucesión de numeros calculados : salida = { 0 + 1 + 3 + 6+ 10... }
  */

let n = 10,
  index = 0,
  suma = 0;
let salida = "";

while (index <= n) {
  let value = (index * (index + 1)) / 2; // value = Calculo de la ecuacion para cada i (index)
  salida = salida + " + " + value; // Para concatenar cada elemento caculado (value)
  suma += value; // Acumular los valores calculados (Sumatoria)
  index++;
}

// Imprimir por consola la sucesión y el resultado
console.log("Sucesión = {", salida, "} = ", suma);
