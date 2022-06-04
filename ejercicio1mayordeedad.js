class Usuario {
    constructor (nombre,edad,DNI){

    
    this.dnombre=nombre
    this.dedad=edad
    this.DDNI=DNI


}
set nombre(nombre){
    this.dnombre=nombre

}
get nombre(){
    return this.dnombre
}
set edad(edad){
    this.dedad=edad;
}
get edad(){
    return this.dedad
}
set DNI(DNI){
    this.DDNI=DNI;

}
get DNI() {
    return this.DDNI
}



datos (){
    console.log("nombre de usuario"+this.dnombre+"tengo"+this.dedad+"numero"+ this.DDNI)
}

verficar(){
    if (this.dedad>17)
return "es mayor de edad"
else 
return "es menor de edad" 
}
}

    

persona= new Usuario ("daniel",25,"1061789774")
persona.dnombre="daniel"
persona.dedad=25
persona.datos()
console.log(persona.verficar())
document.write(persona.verficar())
