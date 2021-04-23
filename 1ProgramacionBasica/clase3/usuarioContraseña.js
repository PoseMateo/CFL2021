let readlineSync=require('readline-sync');
let usuario="Juan";
let clave="claveJuan";
let usuarioIngresado=readlineSync.question("Usuario: ");
let claveIngresada=readlineSync.question("Clave: ");
if (usuario == usuarioIngresado && clave == claveIngresada) {
    console.log ("autorizado");
}else{
    console.log ("Clave o Usuario incorrecto")
}