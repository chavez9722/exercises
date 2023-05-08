const stringInvert = (str = "gnirts nu odasergni ah es oN") => {
    if (str != 'string' || str == undefined) return "Error";

    let reverseStr = "";
    for (let index = str.length-1; index >= 0; index--) {
        reverseStr+= str[index];
    }
    return reverseStr;
}

console.log(stringInvert());