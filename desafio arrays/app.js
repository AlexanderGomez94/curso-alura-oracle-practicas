let listaGenerica = [];
let lenguagesDeProgramacion = ["JavaScript","C","C++","Klotin","python"];
lenguagesDeProgramacion.push("java","ruby","GoLang");

function mostrarArray(lista){
  for(let i=0 ; i<lista.length ; i++){
    console.log(lista[i]);
  }
}
mostrarArray(lenguagesDeProgramacion);

function mostrarArrayAlRevez(lista){
    
    for(let i= lista.length-1; i > -1 ; i--){
        console.log(lista[i]);
    }
}
mostrarArrayAlRevez(lenguagesDeProgramacion);

function promedioArray(lista){
    let divisor = lista.length-1;
    let sumaNumeros = lista[0];
    for(let i = 1 ; i < lista.length ; i++){
        sumaNumeros = sumaNumeros +lista[i];
    }
    let promedio = sumaNumeros/lista.length;
    return console.log("el promedio es "+ promedio);
}
parapromediar = [9,7,8];
promedioArray(parapromediar);


function masChicoYMasGrande(lista){
    let numeroChico = lista[0];
    let numeroGrande = lista[0];
    for(i=0 ; i < lista.length ; i++){
        console.log(lista[i]);
        if(numeroChico > lista[i]){
            numeroChico = lista[i];
        }else if(numeroGrande < lista[i]){
            numeroGrande = lista[i];
        }
        
    }
    return console.log("numero mas grande es : "+ numeroGrande+" numero mas chico es: " +numeroChico);
}
let numeriyos = [5,6,8,155,5,6,11];
masChicoYMasGrande(numeriyos);


function sumas(lista){
    let sumaNumeros = lista[0];
    for(let i = 1 ; i < lista.length ; i++){
        sumaNumeros = sumaNumeros +lista[i];
    }
    return console.log("la suma de numeros es : "+ sumaNumeros);
}
let listasumar = [2,2,2,2,2];
sumas(listasumar);


function buscarEnLista(lista , buscado){
    let posicion = -1;
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i]);
        if(buscado == lista[i]){
            posicion = i;
        }
    }
    return console.log("tu numero fue encontrado en la posicion : "+posicion);
}
let listaDeBusqueda = [2,4,5,7,8,11];
buscarEnLista(listaDeBusqueda,5);


function SumaDeListas(lista1, lista2){
    let listaDefinitiva = [];
    let numeroAEntrar = 0;
    for(let i = 0 ; i < lista1.length ; i++){
        numeroAEntrar = lista1[i]+lista2[i];
        listaDefinitiva.push(numeroAEntrar);
    }
    return console.log(listaDefinitiva);
}


let sumalista1 = [1,2,10];
let sumalista2 = [2,2,3];

SumaDeListas(sumalista1,sumalista2);


function cuadrado(lista){
    let listanueva = [];
    for(i=0; i < lista.length ; i++){
        listanueva.push(lista[i]*lista[i]);
    }
    return console.log(listanueva);
}
let listaAlCuadrado = [2,4,6];
cuadrado(listaAlCuadrado);