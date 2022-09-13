const letras = ['a','b','c','d'];
console.log(letras);

console.log(letras[1]);
console.log(letras[3]);

for (let i = 0; i < letras.length; i++){
    console.log((i + 1) + "° :" +letras[i]);
}