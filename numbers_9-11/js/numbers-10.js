const capicua = num => {
    return num === +(num+"").split("").reverse().join("") ? true : false;
};

console.log("..:: Ejercicio 10 ::..");
console.log(capicua(2002));