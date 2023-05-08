const stringSplit = (str = "", char=" ") => {
    if (typeof str != "string" || str == false || typeof char != "string") {
        return "Error";
    }
    return str.split(char);
}

console.log(stringSplit("Hola Mundo que tal", " "));