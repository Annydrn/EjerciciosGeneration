
const carrito=[
    {nombre: "monitor 27 pulgadas", precio:500}, 
    {nombre :"television", precio:100},
    {nombre: "tablet", precio:300},
    {nombre: "audifonos", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700}

] 


let total= 0;
carrito.forEach(nombre => total += nombre.precio);
console.log(total)