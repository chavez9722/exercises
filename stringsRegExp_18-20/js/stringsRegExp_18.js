const vocalConstant = (userString) => {
    let vocales = 0, consonantes = 0;
    for (const letter of userString.toLowerCase()) {
        if (/[aeiouáéíóú]/.test(letter)) vocales ++;
        if (/[bcdfghjklmnpqrstvwzyz]/.test(letter)) consonantes ++;
    }
    return `Vocales ${vocales} | Consonantes ${consonantes}`
}

console.log("..:: Ejercicio 18 ::..");
console.log(vocalConstant("HOLA MUNDO"));