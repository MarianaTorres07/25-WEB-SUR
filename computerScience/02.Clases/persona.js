class Persona{
    //THIS nos sirve para hacer un referencia a una propiedad del objeto
    //Lo invocacmos hasta el principio de la clase, para aue este presente en todoel codigo
    constructor(nombre,apellido,edad, pais,ocupacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pais = pais;
        this.ocupacion = ocupacion;

    } //fin constructor

    //Metodos
    Saludar(){
        //Texto + Variables
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;

    } //fin saludar

    Hablar(){
        return "BLA BLA BLA ESTOY TARAREANDO"
    } //fin Hablar
} //fin class

//Instancia de la clase
const personaUno = new Persona("Cesar","Garcia",28,"Colombia","Profesor");
const personaDos = new Persona("Rene","Manzano",30,"Mexicano","Sensei Devf");

console.log(personaUno.Saludar()); //Mandar llamar los metodos
console.log(personaDos.Hablar());
