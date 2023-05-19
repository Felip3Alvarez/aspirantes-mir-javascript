function join (x) {
    let chain = "hola ";
    for(let i = 0; i < x.length; i++){
        chain = chain + x[i] + " "; 
    }
    return chain;
}

console.log(join(["cómo", "estás", "amigo?"]))