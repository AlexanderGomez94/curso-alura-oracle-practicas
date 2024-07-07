alert("Bievenidos al juego de ale");
let numeroMaximo=50;
let numeroUsuario = 0;
let numeroSecreto = parseInt(Math.floor(Math.random()*numeroMaximo));
let intento = 5;

while(numeroSecreto != numeroUsuario){
    numeroUsuario = parseInt(prompt("Elegi un numero del 1 al 50"));    
    if(intento > 0){
        if(numeroUsuario == numeroSecreto){
            alert(`felicidades adivinaste y te quedo ${intento} vida`)
            break;
        }else if(numeroUsuario > numeroSecreto){
            alert("incorrecto , el numero es menor")
        }else{
            alert("incorrecto , el numero es mayor")
        }
        intento--;
        console.log(intento);
    }else{
        alert("perdiste , se te acabaron las vidas")
        break;
    }
}