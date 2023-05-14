const arrParImpar = (arr) => {
    return {
        pares : arr.filter(num => num % 2 === 0),
        impares : arr.filter(num => num % 2 != 0)
    };
}

console.log("..:: Ejercicio 23 ::..");
console.log(arrParImpar([1,2,3,4,5,6,7,8,9,0]));