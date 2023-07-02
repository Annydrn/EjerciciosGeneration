function divisibles(num1){
    prompt("Ingrese el valor para ver si es divisible entre 7 : " , num1);
    prompt("Ingrese el valor para ver si es divisible entre 8: " , num2);

    if(num1 % 7 == 0 && num1 % 8== 0){
        console.log(true)
    }
    
    else 
    {
        console.log(false)
    }

}

divisibles(56);
divisibles(7);
divisibles(8);
divisibles(0);
divisibles(224);
divisibles(73);

function divisibles() {
    // Obtener el número ingresado por el usuario
    const num1= prompt('Ingrese un número:');

  
    // Verificar si el número es divisible entre 7 y 8
    if (num1 % 7 === 0 && num1 % 8 === 0) {
      console.log(num1 + ' es divisible entre 7 y 8.');
    } else {
      console.log(num1 + ' no es divisible entre 7 y 8.');
    }
  }
  
  // Llamar a la función para verificar la divisibilidad del número 56
  divisibles();