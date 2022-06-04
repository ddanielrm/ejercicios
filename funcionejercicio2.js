function Cuenta(cuenta,cantidad){
this.cuenta=cuenta 
this.cantidad=cantidad
{
    dcuenta=cuenta
}
this.cuenta=function()
{
    return dcuenta
}
this.cantidad=function(cantidad)
{
    dcantidad=cantidad;
}
this.cantida=function()
{
    return dcantidad
}
this.datos=function ()
{
    console.log("nombre de titular"+dcuenta+"tengo esta cantidad de dinero"+dcantidad+"pesos");
}
this.ingresarmonto(cantidad)
{
    if (cantidad>0){
    dcantidad=dcantidad+cantidad;

}


return dcantidad;
}
retirarmonto=function(cantidad)
{
    if (cantidad>0){
    dcantidad= dcantidad-cantidad;
    }
return dcantidad;
}

}
persona= new Cuenta ("daniel",25)
persona.dcuenta="daniel"
persona.dcantidad=890;
persona.ingresarmonto(10)
persona.retirarmonto(11)
persona.datos()

