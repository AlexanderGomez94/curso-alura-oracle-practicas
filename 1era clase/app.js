/*
let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert(mensajeDeBienvenida);
let numeroSecreto = 5;
let numeroUsuario = prompt("Cual es tu numero?");
console.log(numeroUsuario);

if (numeroSecreto == numeroUsuario) {
    alert("Felicidades Acertaste!")
} 
else{
    alert("es incorrecto!")
}
Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
Declara una variable llamada nombre y asígnale el valor "Luna".
Crea una variable llamada edady asígnale el valor 25.
Establece una variable numeroDeVentas y asígnale el valor 50.
Establece una variable saldoDisponible y asígnale el valor 1000.
Muestra una alerta con el texto "¡Error! Completa todos los campos".
Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos".
Ahora muestra una alerta con el valor de la variable mensajeDeError .
Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".*/
alert("¡Bienvenida y bienvenido a nuestro sitio web!");
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert("¡Error! Completa todos los campos");
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);
 nombre = prompt("ingrese su nombre");
 edad = prompt("ingrese su edad");
if (edad >= 18) {
    alert("puedes obtener tu licencia de conducir!")
} else {
    alert("eres demasiado joven para obtener tu licencia")
}