//*Corrigiendo errores
//8
function maxNum(n1,n2){
    if(n1>n2){
        return n2;
    }else{
        return n1;
    } 
} //fin function

console.log(maxNum(3,7))


//9
function squared(a){
    return a*a;
}
console.log(squared(5));

//10
function menosQue100(a,b){
    let sum = b + a
    if(sum===100){
        return false;
    }else{
        return true;
    }
}

console.log(menosQue100(25,100));
console.log(menosQue100(35,75));


//*Parte Tecnico

/*Ejercicio 1: Escribe una función que tome una cadena de
texto como parámetro y devuelva un objeto con cada
palabra de la cadena como propiedad y el número de veces
que aparece como valor.*/

function contarPalabras(){
    //Completar el codigo aqui
    const cadena = "Hola como estas Hola";
    const palabras = cadena.split(' ');
    const resultado = {};

    palabras.forEach(palabra =>{
        resultado[palabra] = (resultado[palabra] || 0) + 1;
    });

    return resultado;
}console.log(contarPalabras());


//*Ejercico 2 Prueba Tecnica
//Completar el codigo aqui
const boton = document.getElementById("boton");

boton.addEventListener('click',() =>{
    alert("Hola desde JavaScript!");
});

/*Ejercicio 3: Desarrolla una función que tome un número
entero positivo como parámetro y devuelva el factorial de
ese número. */

// factorial(5) => 5 * 4 * 3 * 2 * 1 = 120

function factorial(numero){
    resultado = 1;
    for(let i = 1; i <=numero; i++){
        resultado *= i; 
    }
    //Retornar el resultado
    return resultado;

}
console.log("El factorial de es " + factorial(5));


/*Ejercicio 4: Escribe una función que tome un array de strings
como parámetro y devuelva un nuevo array con las mismas
palabras, pero ordenadas alfabéticamente de forma
ascendente.
// Ejemplo:
// ordenarPalabras(["manzana", "banana", "pera", "uva"]) => ["banana", "manzana", "pera",
"uva"]*/

let ordenarPalabras = ["manzana", "banana", "pera", "uva"];

function ordenarAlfa(ordenarPalabras){
    let ordenar = ordenarPalabras.sort();
    console.log(ordenar);
}ordenarAlfa(ordenarPalabras);
