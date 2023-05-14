const average = (arr) => {
    let average = 0;
    arr.forEach(x => {
        average += x;
    });
    return average /= arr.length;
}

console.log("..:: Ejercicio 26 ::..");
console.log(average([9,8,7,6,5,4,3,2,1,0]));