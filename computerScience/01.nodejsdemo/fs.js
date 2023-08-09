// Importar el modulo de Fil System
const fs = require('fs');
let ruta_archivo = './files/daft_punk.txt';

// Funcion que lee un archivo de File System
function leerArchivo(ruta_archivo){
    fs.readFile(ruta_archivo, 'utf-8', (err,contenido) => {
        if(err != null){
            console.log("Ocurrio un error: " +err);
        }else{
            console.log(contenido);
        }
    });
}

//Funcion que escribe un archivo en File System
function escribirArchivo(ruta_archivo, contenido){
    fs.writeFile(ruta_archivo, contenido, (err) => {
        if(err != null){
            console.log("Ocurrio un error: " +err);
        }else{
            console.log("El archivo se escribó correctamente");
        }
    });
}

//Funcion que renombra un archivo
function renombraArchivo(ruta_archivo, nuevo_nombre){
    fs.rename(ruta_archivo, nuevo_nombre, (err) => {
        if(err != null){
            console.log("Ocurrio un error: " +err);
        }else{
            console.log("El archivo se renombró correctamente");
        }
    });

}

leerArchivo(ruta_archivo);
escribirArchivo('./files/daft_punk4.txt', 'Nueva lista de canciones.');
renombraArchivo('./files/daft_punk3.txt', './files/daft_punk2.txt');