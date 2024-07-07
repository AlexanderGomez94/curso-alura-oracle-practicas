//IMC
function calcularIMC(peso,altura){
    return (peso/(altura*altura));
}
console.log(calcularIMC(72,1.70));
//FACTORIAL
function factorial(numero){
    let resultadoInicial = numero*(numero-1);
    console.log(resultadoInicial)
    numero2 = numero-1;
    while(numero2 > 0){
        numero2--;
        if(numero2 != 0){
            resultadoInicial = resultadoInicial*numero2;
            console.log(resultadoInicial)
        }else{
            break;     
        }  
    }   
}
factorial(5);
let resultado = 0;

function cambioDolar(numero){
     resultado = numero * 1440;
     return resultado;   
}
console.log(cambioDolar(100));

function rectangulo (altura,anchura){
    let area = anchura * altura ;
    let perimetro = (altura+anchura)*2;
    return console.log("area es: "+ area +" perimetro es "+ perimetro);
}

rectangulo(2,2);

function circulo(radio){
    let pi = 3.14;
    let perimetro =parseInt( 2 * pi * radio);
    let area = parseInt(pi * (radio*radio));
    return console.log("radio : "+ radio +" perimetro: "+ perimetro +" area: "+area);
}

circulo(19);

function tabla (numero){
    let contador = 0;
    while(numero != numero*10){
        contador++;
        console.log(numero + "x" + contador +"="+ (numero*contador));
        if(contador == 10){
            break;
        }
    }

}
tabla(2);










