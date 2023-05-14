const ascDesc = (arr) => {    
    return {
        asc : [...arr.sort()],
        desc : [...arr.sort().reverse()]
    }
}

console.log("..:: Ejercicio 24 ::..");
console.log(ascDesc([7, 5,7,8,6]));