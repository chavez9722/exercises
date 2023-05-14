const binAndDec = (num, base) => {
    if (base != 10 && base != 2) return "Error";
    if (typeof num != "number") return "Error";
    if (base === 2) {
        let sum = 0;
        for (let i = 0; i < (num+"").length; i++) {
            sum += (num+"")[i] * (2 ** ((num+"").length - 1 - i));            
        }
        return sum;
    }

    let sum = "";
    while (num != 0) {
        sum += Math.floor(num % 2)+"";
        num = Math.floor(num/2);
    }
    return sum.split("").reverse().join("");
}

console.log("..:: Ejercicio 15 ::..");
console.log(binAndDec(5, 10));