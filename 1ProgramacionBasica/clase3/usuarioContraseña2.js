let readlyneSync = require("readline-sync");
let usuario = readlyneSync.question("Indique su usuario:");
let contraseña = readlyneSync.question("Indique  su contraseña:");
let usuarioValido = "Juan";
let contraseñaValida = "claveJuan";
if(usuario == usuarioValido && contraseña == contraseñaValida ){
    console.log("Bienvenido!");
    }else{
     console.log("Su usuario o contraseña no son correctas, vuelva a intentarlo!");

}