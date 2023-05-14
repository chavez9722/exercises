const primo = (num) => {
    // if (Number.isInteger(Math.sqrt(num))) return false
    // for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
    //     if (num % i == 0) return false;
    // }
    // return true
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
        return true;
    }
}

console.log("..:: Ejercicio 12 ::..");
console.log(primo());