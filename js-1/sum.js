function sum(x) {
    let respuesta = 0;
    for (let i = 1; i <= x; i++){
        respuesta = respuesta + i;
    }
    return respuesta
}

console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120