const charCounter = str => {
    if (typeof str != "string" || str == false) {
        return "Error"
    }
    return str.length;
}

console.log(charCounter("Hola Mundo"));