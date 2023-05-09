const randomNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min)+min);
}

console.log("..:: Ejercicio 9 ::..");
console.log(randomNumber(501, 601));