//ejercicio de la clase 4 
let readlineSync = require("readline-sync");
console.log("Verificaremos si un numero es PAR o IMPAR");
let numeroIngresado = readlineSync.questionFloat("Ingrese un numero: ");
if (numeroIngresado == 0){
    console.log("El numero debe ser distinto de 0 (cero).")
}else{
    if ((numeroIngresado % 2) == 0){
        console.log("El numero es PAR.")
    }else{
        console.log("El numero es IMPAR.")
    }
}