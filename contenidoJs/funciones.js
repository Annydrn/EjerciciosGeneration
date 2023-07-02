
//?-------------------------------------------------------------------------------------------
//declarar una funcion
//!Funciones con resultado llamando la funcion
function sumar() {
    console.log(2+2)
}
sumar(4,9)

//expresion de funcion se parece a declarar una varible

const numero1=20;
const numero2="20"

console.log(parseInt(numero2));//este es una funcion
console.log(numero1.toString())//este es un metodo

function sumar(a, b) {//se crea el espacio para los parametros
    console.log(a+b)//se asignan los parametros
    
}
sumar(3,5)//se da la informacion mediante parametros

function saludar(nombre,apellido){
    console.log(`hola ${nombre} ${apellido}`);
}
saludar("andrea", "duran")

//existen los parametros por default que es colocarle un reemplazo
//al parametro cuando el usuario no da toda su informacion
function saludar(nombre="desconocido",apellido=" "){//a apellido le
    // colocamos el espacio vacio para que no nos muestr un undefined que se veria mal
    console.log(`hola ${nombre} ${apellido}`);
}
saludar()//aca dira "hola desconocido"

function sumar() {
    console.log(2+2)
}
sumar(4,9) 
//?-------------------------------------------------------------------------------------------
//!Funciones con return
//agregar un valor al return sirve para que este guarde informacion
let total= 0;

function agregarCarrito(precio){
    return total+= precio// le decimos que el valor del precio
    // se almacene en la variable total para que se vaya actualizando sin peder informacion
    }

    function calcularImpuesto(total){
        return total * 1.19;//pedimos que el valor final de total se calcule con el 19%
        //que se cobra de impuesto para darnos el total a pagar
    }
    total=agregarCarrito(200)
total=agregarCarrito(500)
const totalAPagar=calcularImpuesto(total);
console.log(`El total a pagar es ${totalAPagar}`)

//otro ejemplo

    let saludo="hola como estas"
    function saludar(nombre) {
        return nombre
    }
    const bienvenida= saludar("andrea")
    console.log(`${saludo} ${bienvenida}`)

    //?-------------------------------------------------------------------------------------------
//funciones en un objeto

    const reproductor ={
        reproducir: function(id){
            console.log(`reproduciendo cancion con el id ${id}`)
        },
        pausar: function(){
            console.log("pausando....")
        },
         borrar: function(){
            console.log("borrando cancion .....")
        }
}
reproductor.reproducir(50);
reproductor.pausar()
reproductor.borrar()

//Array function
const aprendiendo= function(){
    console.log("aprendiendo javascript")
}
//convertiendo a funcion flecha
const aprendiendo2= (contenido) =>{//se elimina la palabra reservada "function" y se 
    //coloca la flecha => despues de los parentesis
    console.log(`aprendiendo javascript ${contenido}`)
}
aprendiendo2("funciones")



const saludame= (nombre) => `hola como estas ${nombre}`
  


console.log(saludame("andrea"));


