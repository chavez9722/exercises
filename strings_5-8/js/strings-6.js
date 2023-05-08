"use strict";

const stringRepeated = (str = undefined, word = undefined) => {
    if (str == undefined || word == undefined) return "Error";
    var regExp = new RegExp(word,'g');
    let founds = str.match(regExp);
    return founds.length;
};

console.log(stringRepeated("hola mundo adios mundo", "mundo"));