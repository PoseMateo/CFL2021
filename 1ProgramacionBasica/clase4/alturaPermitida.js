//CORREGIR AGREGAR VARIABLE de 1.30
let readlineSync=require('readline-sync');
console.log ('TEST DE APTITUD DE SEGURIDAD');
let alturaUsuario = readlineSync.questionFloat('Ingrese su altura: ')
if(alturaUsuario >= 1.30){
    console.log("Puede pasar al juego!!! que lo disfrute")
}else{
    console.log("No puese ingresar al juego, usted es muy petiso.")
}