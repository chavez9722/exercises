"use strict";

const palindromo = (str = undefined) => {
    if (str == undefined) return "Error";
    return (str.replaceAll(" ", "").toLowerCase() === str.replaceAll(" ", "").split("").reverse().join("").toLowerCase()) ? true : false;
};

console.log("..:: Ejercicio 7 ::..");
console.log(palindromo("Hannah"));