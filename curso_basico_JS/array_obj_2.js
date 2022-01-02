var articulos = [
    {nombre:"bici", costo:3000},
    {nombre:"TV", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"celular", costo: 10000},
    {nombre:"laptop", costo: 25000},
    {nombre:"teclado", costo: 500},
    {nombre:"audifonos", costo: 1700}
 ];
//// metodo filter
 var articulosFiltrados = articulos.filter( function(articulo){
     return articulo.costo<=500
 });
 //// metodo map
 var nombreArticulo = articulos.map(function(articulo){
     return articulo.nombre
 });
 /// metodo find
 var encuentraArticulo = articulos.find(function(articulo){
     return articulo.nombre === "laptop"
 });
 /// metodo forEach
 articulos.forEach(function(articulo){
     console.log(articulo.nombre);
 });
 ///  metodo some
 var articulsoBaratos = articulos.some(function(articulo){
     return articulo.costo <= 700;
 });