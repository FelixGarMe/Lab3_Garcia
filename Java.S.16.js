let numero = 1;

let numeroTexto = 'Valor desconocido';

switch (numero) {
    case 1:
        numeroTexto = 'Número 1';
        break;
    case 2:
        numeroTexto = "Numero 2";
    case 3:
        numeroTexto = "Numero 3";
    case 4:
        numeroTexto = "Numero 4"        
    default:
        numeroTexto = "Caso no encontrado";
        break;
}
console.log(numeroTexto);