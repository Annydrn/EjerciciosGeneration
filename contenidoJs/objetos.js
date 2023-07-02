const usuario= {
    name: "andrea",
    ciudad: "santiago",
    pais: "chile",
    salud:{
        estatura:1.60,
        peso: 60,
        familia:{
            casado: true,
            hijos: 2
        }
    }
}
// console.log(usuario.ciudad);
// console.log(usuario["name"])
// //Agregar propiedades al array

// usuario.imagen="imagen.jpg"
// console.log(usuario)

// //eliminar propiedades
// delete usuario.name
// console.log(usuario)

// //desestructurar una array para sacar un valor de una propiedad
// const {ciudad}= usuario
// console.log(ciudad)

// console.log(usuario.salud.familia.hijos)

// //desestructuracion de arreglos anidados
// const {pais, salud:{familia}}= usuario
// console.log(familia)

//! METODOS DE LOS OBJETOS

    Object.freeze(usuario)// hace que el array no se pueda modificar

console.log(Object.isFrozen(usuario))

Object.seal(usuario)//se usa para sellar un objeto //* a diferencia de freeze este
// metodo si permite modificar el objeto pero no crear ni eliminar


