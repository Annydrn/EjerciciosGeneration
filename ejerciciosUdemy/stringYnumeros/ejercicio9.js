let text= prompt("escribe una frase");
let contador=0;

for (let i = 0; i< text.length; i++) {
  if (text.charAt(i)==="a"){
    contador++
  }
    }

console.log(`la letra a aparece ${contador} veces en la frase`)
