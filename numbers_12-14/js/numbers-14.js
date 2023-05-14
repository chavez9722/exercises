// °F = (1.8 * °C) + 32
// °C = °F - 32 / 1.8

const gradesConvertion = (grades, scala) => {
    return (scala.toUpperCase() == "C") ? (1.8 * grades) + 32 : (grades - 32) / 1.8
}

console.log("..:: Ejercicio 14 ::..");
console.log(gradesConvertion(0, "C"));