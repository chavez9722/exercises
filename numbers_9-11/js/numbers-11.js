const factorial = (num = undefined) => {
    if (num == undefined || num < 1) return "Error"
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
};

console.log("..:: Ejercicio 11 ::..");
console.log(factorial(5));