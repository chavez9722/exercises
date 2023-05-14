const arrayMinMax = (arr) => {
    // console.log(arr); // Imprime un array.
    // console.log(...arr); // Imprime una lista de argumentos.
    return [Math.min(...arr), Math.max(...arr)];
}

console.log("..:: Ejercicio 22 ::..");
console.log(arrayMinMax([1, 4, 5, 99, -60]));