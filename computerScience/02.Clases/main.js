// Crear Nuestra Clase

class Estudiante{
    //Atributos

    constructor(nombre,apellido, calFinal,inscrito){
        this.nombre = nombre;
        this.apellido = apellido;
        this.calFinal = calFinal;
        this.inscrito = inscrito;
    }//fin de constructor


    //Metodos
    Aprobado (){
        //desarrollar logica (IF ELSE)
        if(this.calFinal >= 7.6){
            return "APROBADO: " + Math.round(this.calFinal);
        }else if(this.calFinal <= 7.5){
            return "CALIFICACION NO VALIDA, ERROR!";
        }

    } //FIN APROBADO

    Inscrito (){
        if(this.inscrito === true){
            return "El estudiante si esta inscrito en el semestre"
        }else if(this.inscrito === false){
            return "EL estudiante no esta inscrito en el semestre"
        }else{
            return "error en el sistema consultar más tarde .. . "
        }

    } //fin Inscrito

} //fin clase

   //Vamos a crear nuestras instancias de la clase estudiante
                                        //Harcodear los datos
   const estudianteUno = new Estudiante ("Juan","Gomez", 8.2, true);
   const estudianteDos = new Estudiante ("Teodoro","Andrez", 7.2, false);
   const estudianteTres = new Estudiante ("Cesar","Garcia", 9.3, true);
   const estudianteCuatro = new Estudiante ("Maria","Gomez", 8.3, 2);

   console.log(
        estudianteUno.nombre, 
        estudianteUno.apellido, 
        estudianteUno.Aprobado(),  //Los metodos
        estudianteUno.Inscrito()
    )

    console.log(
        estudianteDos.nombre, 
        estudianteDos.apellido, 
        estudianteDos.Aprobado(),  //Los metodos
        estudianteDos.Inscrito()
    )

    console.log(
        estudianteTres.nombre, 
        estudianteTres.apellido, 
        estudianteTres.Aprobado(),  //Los metodos
        estudianteTres.Inscrito()
     )    

     console.log(
        estudianteCuatro, 
        estudianteCuatro.Aprobado(),  //Los metodos
        estudianteCuatro.Inscrito()
     )    