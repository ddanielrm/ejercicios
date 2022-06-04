class Cuenta {
    constructor (cuenta,cantidad){
    this.dcuenta=cuenta
    this.dcantidad=cantidad
}
set cuenta(cuenta){
    this.dcuenta=cuenta
}
get cuenta(){
    return this.dcuenta
}
set cantidad(cantidad){
    this.dcantidad=cantidad;
}
get cantidad(){
    return this.dcantidad
}

datos (){
    console.log("nombre de titular"+this.dcuenta+"tengo esta cantidad de dinero"+this.dcantidad+"pesos");
}

ingresarmonto(cantidad){
    if (cantidad>0){
    this.dcantidad= this.dcantidad+cantidad;

}
return this.dcantidad
}
retirarmonto(cantidad){
    if (cantidad>0){
    this.dcantidad= this.dcantidad-cantidad;
    }
return this.dcantidad;
}
}
   

persona= new Cuenta ("daniel",25)
persona.dcuenta="daniel"
persona.dcantidad=890;
persona.ingresarmonto(10)
persona.retirarmonto(11)
persona.datos()




