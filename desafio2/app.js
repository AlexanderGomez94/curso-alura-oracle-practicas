function saluda(){
    console.log("Hola mundo!");
}
saluda();   
function saludarNombre (nombre){
    return console.log("hola "+ nombre);
}
saludarNombre("alexander");

function darDoble (numero){
    return console.log(numero*2);
}
darDoble(4);

function promedio (numero1,numero2,numero3){
    return console.log (parseInt((numero1 + numero2 + numero3)/3)) ;
}
promedio (7,7,7);

function darMasAlto(numero1,numero2){
    if(numero1>numero2){
        return console.log(numero1);
    }else if(numero1<numero2){
        return console.log(numero2);
    }else{
        return console.log("son iguales");
    }
}
darMasAlto(43,43);

function multi(numero){
    return console.log(numero*numero);
}

multi(6);