const emailValidaor = (email) => {
    var regExp = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
    if (!regExp.test(email)) return "No valido";
    return "valido"
}

console.log("..:: Ejercicio 20 ::..");
console.log(emailValidaor("chavez@lala.com"));