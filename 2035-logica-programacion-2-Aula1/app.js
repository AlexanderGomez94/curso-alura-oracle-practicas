//variables necesarias
let numAleatorio = generarNum();

//funcion cambiar elementos html
function changeElement(elemento,texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").Value);
    console.log(numAleatorio);
    console.log(typeof(numAleatorio));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numAleatorio == numeroDeUsuario);
}




//llamando la funcion
changeElement("h1","Hola, Bievenidos al juego de ale 2.0");
changeElement("p","Adivina mi numero entre 1 y 100 ;)");
//generador de numero aleatorio
function generarNum(){
    return parseInt(Math.floor(Math.random()*10)+1);
}

