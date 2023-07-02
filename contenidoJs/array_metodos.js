const meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"]

const carrito=[
    {nombre: "monitor 27 pulgadas", precio:500}, 
    {nombre :"television", precio:100},
    {nombre: "tablet", precio:300},
    {nombre: "audifonos", precio: 300},
    {nombre: "teclado", precio: 400},
    {nombre: "celular", precio: 700}

] 
 //comprobar si un valor existe en un arreglo
 meses.forEach(meses =>{ 
    if (meses ==="enero"){console.log("enero si existe")};
}
 )

 const resultado = meses.includes("enero");
 console.log(resultado)

 //para encontrar el lugar de indice de algun elemento
 const indice2= carrito.findIndex(nombre => nombre.precio=== 100)
 console.log(indice2)
