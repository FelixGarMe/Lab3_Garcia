const vocales = ['a','b','i','o'];
console.log(vocales);

console.log(vocales[0]);
console.log(vocales[2]);

for(let i = 0; i < vocales.length; i++){
    console.log(i+' : '+vocales[i]);
}

vocales[1] = 'e';
console.log(vocales[1]);

vocales.push('u');

console.log(vocales);