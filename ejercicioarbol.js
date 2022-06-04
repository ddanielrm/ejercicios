class Abuelos
{
    constructor(nombres,edades,parentesco){
     this.nombres=nombres;
     this.edades=edades;
    this.parentesco=parentesco
    }
}

class abum extends Abuelos
{
    constructor(nombre,edades,parentesco,colorpiel){
        super(nombre,edades,parentesco)
        this.colorpiel=colorpiel;
    
    }

}

mis()
{
    console.log("mi abuelos maternos son "+this.nombre+this.color)
}

let dan=new abum("aura",80,"abuela"

)
