//ejercicio de la clase 4 
let readlineSync = require("readline-sync");
//para saber cual de los tres numeros ingresados es mayor
let primerNumeroIngresado = readlineSync.questionFloat("Ingrese el PRIMER numero:");
let segundoNumeroIngresado = readlineSync.questionFloat("Ingrese el SEGUNDO numero:");
let tercerNumeroIngresado = readlineSync.questionFloat("Ingrese el TERCER numero:");
if (primerNumeroIngresado>segundoNumeroIngresado && primerNumeroIngresado>tercerNumeroIngresado){
    console.log ("El mayor numero es el: "+primerNumeroIngresado);
}else{
    if (segundoNumeroIngresado>primerNumeroIngresado && segundoNumeroIngresado>tercerNumeroIngresado){
    console.log ("El mayor numero ingresado es el: "+segundoNumeroIngresado)
     }else{
        if (tercerNumeroIngresado>primerNumeroIngresado && tercerNumeroIngresado>segundoNumeroIngresado)
        console.log ("El mayor numero ingresado es el: "+tercerNumeroIngresado)}
    }