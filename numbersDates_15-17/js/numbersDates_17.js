const years = (date) => {
    return (new Date()).getFullYear() - date.getFullYear();
}

console.log("..:: Ejercicio 17 ::..");
console.log(years(new Date(1997,4,23)));