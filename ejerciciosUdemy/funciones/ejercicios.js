// //!EJERCICIO N°1

// function numeroMayor(num1, num2, num3) {
//     if (num1=== num2 & num2===num3) {
//         return "Los numeros son iguales";
//     }
//     else{
//         let mayor= Math.max(num1,num2,num3);
//         return mayor
//     }
   
// }
// console.log(numeroMayor(3,3,3));

//!EJERCICIO N°2
// function esVocal(vocal){
//     let letra= vocal.toLowerCase()
//     if (letra=== "a"|| letra ==="e" || letra ==="i"|| letra ==="o" || letra === "u") {
//         return true;
//             }
//             else{
//                 return false
//             }
// }
// console.log(esVocal("A")) 

//!EJERCICIO N°3
// function generar_caracteres(num,caracter) {

//     let frase=""
//     for (let i = 0; i <= num; i++) {
//         frase += caracter
//             }
//     return frase
// }
// console.log(generar_caracteres(7,"a"))

//!EJERCICIO N°4
// function longitud(arreglo){

// for (let i = 0; i <= arreglo.length; i++) {
//     }
//     return arreglo.length
// }

// function sumaArreglo(numeros){
//     let suma= 0
//     for (let i = 0; i < numeros.length; i++) {
//         suma += numeros[i];
        
//     }
//     return ` La longitud del arreglo es ${longitud(numeros)} la suma de los valores del arreglo es ${suma} `
// }

// console.log(sumaArreglo([1,2,3,4,5,6]))

//!EJERCICIO N°5
// function multiplicarArreglo(arreglo){
//     let mayor = Math.max(...arreglo);//debo colocar los puntos para 
// //agrandar el array y tener el espacio para los parametros
//     let menor= Math.min(...arreglo)
//      resultado = mayor * menor
//      return resultado
// }
// function resultadoTotal(arreglo){
//     let resultado = multiplicarArreglo(arreglo)
//     return `el resultado es ${resultado}`
// }

// console.log(resultadoTotal([1,2,3,4,5,6]))

//!EJERCICIO N°6
// function boleanoArray(array, array2){
//     let nuevoArreglo= array.concat(array2)
//     return nuevoArreglo
//    }

//    function longitud(nuevoArreglo) {
//     if (nuevoArreglo.lenght >=10){
//         return true
//     }
//     else{
//         return false
//     }
//    }
// console.log(boleanoArray([1,2,3,4],[5,6,7,8]))

//!EJERCICIO N°7
// function funcionArray(array,array2){
//     let nuevoArreglo2= array.concat(array2);
//    let arregloMultiplicado= nuevoArreglo2.map((nuevoArreglo2)=>nuevoArreglo2*2)
//  return arregloMultiplicado
// }
// console.log(funcionArray([1,2,3],[4,5,6]))
