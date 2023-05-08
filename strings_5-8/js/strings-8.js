console.log("..:: Ejercicio 8 ::..");
const deletePattern = (str, pattern) => {
    const regExp = new RegExp(pattern, "g");
    return str.replaceAll(regExp, "");
}

console.log(deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));