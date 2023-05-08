const stringRepeat = (str = "Empty sring", num = 1) => {
    if (typeof str != "string" || str == false || typeof num != "number") {
        return "Error";
    }
    return str.repeat(num);
}

console.log(stringRepeat("Hola Mundo", 3));