class Animales{
constructor(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}
cantar(){
    console.log("el")+this.nombre+"puede cantar"
}
saltar(){

    return`${ this.nombre}puede salat`;
}
}

class Gatos extends Animales
 {
constructor(nombre,edad,color){
    super(nombre,edad)
    this.color=color;

}
mauyar(){
    console.log("el gato duerme y tiene color"+this.color)
}

}

class Perro extends Animales
{
    constructor(nombre,edad,pulgas ){
    super(nombre,edad)
    this.pulgas=pulgas;
}
 ladra(){
     console.log("el perro tiene"+this.pulgas)
 }





 

}
class Insecto extends Animales
{
    constructor(nombre,edad,esqueleto ){
    super(nombre,edad)
    this.esqueleto=esqueleto;
}
 osea(){
     console.log("el insecto tiene"+this.esqueleto)
 }





 

}
let kratos =new Gatos("kratos",40,"ngro")
console.log(kratos.mauyar());
console.log(kratos.saltar());
let evan=new Perro ("evan",10,"hambre")
console.log(evan.ladra());
let lombris=new Insecto ("LOM",0,"NO TIENE HUESOS")
console.log(lombris.osea())
