const discount = (num, disc) => {
    return num - (disc / 100 * num);
}

console.log("..:: Ejercicio 16 ::..");
console.log(discount(1000, 20));