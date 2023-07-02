    // //!EJERCICIO N° 1
    const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(numbers)

    //  //!EJERCICIO N° 2
     let amigos = ["Pedro","Maria","Joan","Pili"]; 

    misAmigos=`Mis amigos son ${amigos[1]} y ${amigos[2]}`
    console.log(misAmigos)

    // //!EJERCICIO N° 3
    let meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", 
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

        const solicitud= parseInt(prompt("escribeme en numero un mes del año"));

        const respuesta= `El mes del año es ${meses[solicitud -1]}` ;
        console.log(respuesta)

  //!EJERCICIO N° 4

 function sumaLista ([num1, num2, num3, num4]){
    let total= num1+ num2+ num3+ num4;
    console.log(`El monto total es : ${total}`)
 }
 sumaLista([10, 90,30,40])
  

