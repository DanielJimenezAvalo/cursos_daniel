var frutas = ["Manzanas","Platano","Cereza","Fresa"];

console.log(frutas);

//agregar elemento al array al ultimo
var masFrutas = frutas.push("Uvas")
//eliminar el ultimo elemento del array
var ultimo = frutas.pop("Uvas")
//agregar elemento al inicio
var nuevaLongitud = frutas.unshift("Uvas");
//elimina solo el primer elemento del array
var borrarFruta = frutas.shift("Uvas")
//ver la posicion de un elemento
var posicion = frutas.indexOf("Cerezas")