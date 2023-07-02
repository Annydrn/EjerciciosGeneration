//! EJERCICIO N° 1

const usuario={
    nombre:"andrea",
    apellido:"duran",
    edad:"29",
    email:"andrea@gmail.com",
    direccion:"santiago"
}
console.log(usuario)

//!EJERCICIO N° 2
const juan={
    ingles:9,
    programacion:8,
    html:7
}
let calificacion= ((juan.ingles + juan.programacion + juan.html) / 3)
console.log(calificacion)

//!EJERCICIO N° 3
const producto={
    precio:parseInt(prompt("ingrece valor de producto")),
    descuento:10
}

let metodo= ((producto.precio * producto.descuento) / 100);
let total= producto.precio - metodo;
console.log(total)