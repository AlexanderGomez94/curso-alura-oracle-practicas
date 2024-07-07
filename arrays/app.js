
function changeElement(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    }

changeElement("h1","hola mundo");

//creando la variable de larray vacia

let lista = [];
//ingresar elementos al principio de la lista
lista.shift("mandarina");
//ingresar elementos al final de la lista
lista.push("manzana", "banana", "pera");
//imprimir la lista
console.log(lista);
//imprimir tamaño de la lista
console.log(lista.length);
//imprimir ultimo elemento de la lista
console.log(lista[lista.length-1]);
//imprimir primer elemento de la lista
console.log(lista[0]);
//eliminar el ultimo elemento de la lista
lista.pop();
// verificar si hay tal elemento en la lista devuelve true si esta o false si no esta.
console.log(lista.includes("banana"));
