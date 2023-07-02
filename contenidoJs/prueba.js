function sentenceIf(anioActual, anioPersona) {
    const resultado= anioActual - anioPersona
    if (resultado < 10 ) {
        console.log("la persona es menor de edad y tiene", resultado, "años")
    }

    else if(resultado >=10 && resultado <18){
        console.log("la persona  mayor de 10 años pero es menor de edad y tiene", resultado, "años")
    }
    else if(resultado > 18){console.log("la persona es mayor de 18 años y tiene", resultado, "años")}
}
sentenceIf(2023,1980)