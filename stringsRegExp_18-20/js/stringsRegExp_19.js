const nameValidator = (name) => {
    var regExp = /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g;
    if (!regExp.test(name)) return "No valido";
    return "valido"
}

console.log("..:: Ejercicio 19 ::..");
console.log(nameValidator("Gustavo Chávez"));