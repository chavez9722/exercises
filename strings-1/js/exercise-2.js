const stringCutout = (str = "", num = str.length || 0) => {
    if (typeof str != "string" || str == false || typeof num != "number") {
        return "Error";
    }
    return str.slice(0, num);
}

console.log(stringCutout("Hola Mundo", 4));