console.log("Bienvenidos al desafio");
let nombre = "alexander";
console.log("Hola "+ nombre);
alert("hola ,"+nombre);
let respuesta = prompt("cual es tu lenguaje de programacion favorito?");
console.log(respuesta);
let valor1 = 5 ;
let valor2 = 10;
let resultado = valor1-valor2;
console.log("la diferencia entre estos dos numeros es :" + resultado);
let edad = parseInt(prompt("ingresa tu edad"));
if(edad > 18){
    alert("eres mayor de edad")
}else{
    alert("eres menor de edad")
}
let numeroAMostrar = 0;
while(numeroAMostrar < 11){
    console.log(numeroAMostrar)
    numeroAMostrar++
}
let nota = 8;
if (nota < 7){
    console.log("estas desaprobado")
}else{
    console.log("estas aprobado :)")
}
console.log(parseInt(Math.floor(Math.random()*1000)))
