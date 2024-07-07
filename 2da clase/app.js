alert("Bienvenidos al juego de adivinar el numero");

let intentos = 1;
let numeroSecreto = 8;
let numeroUsuario = 0;
let vezOvecez = "intento";
while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Elegi un numero del 1 al 10");
    if(numeroUsuario == numeroSecreto){
        alert(`Felicidades ! , acertaste el numero en ${intentos} ${vezOvecez}`)
    }else if (numeroSecreto > numeroUsuario){
        alert("numero incorrecto , el numero es mas grande!")
    }else{
        alert("numero incorrecto , el numero es mas chico!")
    }
    intentos = intentos +1;
    vezOvecez = "intentos";
}