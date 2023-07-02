const numeros=[10, 20, 30];

//un arreglo  puede tener todo tipo de datos

const deTodo=["hola",10, true, "si", null, {nombre: "juan", trabajo:"programador"}]
 console.log(deTodo);

 console.table(numeros);

 //aqui accedemos a la informacion del indice pedido
 console.log(numeros[2]);

 const meses=["enero", "febrero", "marzo", "abril", "mayo", "junio",["julio", "agosto"]] 

 //aca creamos una tabla de ayuda visual para ver las posiciones del arreglo y el valor de cada uno
 console.table(meses)

 //esto sirve para mosificar el valor de la posicion indicada o agregar
 // mas informacion al arreglo colocandole las posiciones siguientes
 meses [0]= "nuevo mes";
 console.log(meses)

 meses[7]="septiembre";

 console.table(meses);

 //agregar informacion al arreglo
 meses.push("octubre")
 console.log(meses)
//*podemos agregar tambien arreglos u objetos completos
const estaciones = {verano:"enero",
otoño: "abril"}

meses.push(estaciones);
console.table(meses);

//eliminar el ultimo elemento del arreglo
meses.pop();
console.table(meses)

//eliminar al inicio del arreglo
meses.shift();
console.table(meses);

//eliminar varios elementos en la posicion asignada y los que quiera
meses.splice(1,4)
console.table(meses);

//desestructurar un arreglo se hace igual que con los obejtos
//solo que con los corchetes []
const [meses.estaciones]= mesesCalurosos;
console.table(mesesCalurosos);