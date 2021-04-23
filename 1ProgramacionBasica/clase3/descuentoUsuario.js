let readlineSync=require('readline-sync');
console.log("Te calculo el precio con descuento...");
let ingresePrecio = readlineSync.questionInt('Ingrese Precio Total: ');
let ingreseDescuento = readlineSync.questionInt('Ingrese Descuento: ');
let resultado = (ingresePrecio*ingreseDescuento);
let descuento = resultado/100
let precioConDescuento = ingresePrecio-descuento
console.log("El precio con descuento es: ", precioConDescuento);
 
