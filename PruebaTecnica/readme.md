1. ¿Cuál es el propósito principal de CSS?
El propósito de CSS es dar estilo a una página web.

2. ¿Cuál es la diferencia entre margin y padding en CSS?
Margin es el espacio entre cajas y el padding es el espacio entre el contenido dentro de la misma caja

3. ¿Qué es Bootstrap?
Bootstrap es un framework que es utilizado para hacer paginas responsivas.

4. ¿Cuál es la etiqueta correcta para enlazar un archivo de
hoja de estilos externo en un documento HTML?
<link href="./style.css" rel="stylesheet">

5. ¿Qué es una clase CSS y cómo se selecciona en un
documento HTML?
Una clase CSS es donde varias etiquetas pertenecen a un grupo. 
se selcciona como la plabara reservada class. Ej: class="NombreDeLaClase"

6. ¿Qué es un diseño web responsivo (responsive design)?
Resonsive design es cuando una pagina cambia de tamaño con respecto una tablet, telefono o desktop.

7. En tan solo 3 líneas de código en tu css indica cómo
harías para posicionar los cuadros rojos justo en medio
de un contenedor, como se muestra en la siguiente
imágen, (si es necesario crea el index)
    display: flex;
    align-items: center;
    justify-content: center;

8. Encuentra y corrige los errores


JavaScript
Parte teórica
1. Pregunta: ¿Qué es JavaScript?
JavaScript es un lenguaje de programación utilizado para volver dinamico las paginas en donde podemos manipular datos y dar interactividad a botons, etc.

2. Pregunta: ¿Cuál es la diferencia entre "null" y
"undefined" en JavaScript?
La diferencia es que Null la inicializamos a una variable y undefined es cuando quieres acceder a una variable sin ser declarada. 


3. Pregunta: ¿Cómo se declara una variable en JavaScript?
let var1 = null; 

4. Pregunta: ¿Qué es una función en JavaScript?
Una funcion en JavaScript es una agrupación de instrucciones que se ejecutan cuando se llama o se invoca y es utlizado para reaulizar codigo. 


5. Pregunta: ¿Cuál es la diferencia entre "==" y "===" en
JavaScript?
La diferencia de ==, es de igualdad, por ejemplo "5" == 5, nos daria True porque solo compara el valor y la de igualdad estricta, por ejemplo "5" === 5 nos daria False, porque compara el valor y tipo de dato.

Pregunta: ¿Qué es el DOM (Document Object Model) en
JavaScript?
DOM es como un arbol, donde cada una de las etiquetas es un nodo o rama y cada nodo puede tener un atributo o propiedad. 


Parte Práctica
Ejercicio 1: Escribe una función que tome una cadena de
texto como parámetro y devuelva un objeto con cada
palabra de la cadena como propiedad y el número de veces
que aparece como valor.


Ejercicio 2: Completa el siguiente código para que, al hacer
clic en el botón, se muestre un mensaje que diga "¡Hola
desde JavaScript!".


Ejercicio 3: Desarrolla una función que tome un número
entero positivo como parámetro y devuelva el factorial de
ese número.
// Ejemplo:
// factorial(5) => 5 * 4 * 3 * 2 * 1 = 120


Ejercicio 4: Escribe una función que tome un array de strings
como parámetro y devuelva un nuevo array con las mismas
palabras, pero ordenadas alfabéticamente de forma
ascendente.
// Ejemplo:
// ordenarPalabras(["manzana", "banana", "pera", "uva"]) => ["banana", "manzana", "pera",
"uva"]