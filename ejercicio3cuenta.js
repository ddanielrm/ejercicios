class Cuentadan {
    constructor( titular,edad, cantidad = 0, bonificacion = 0){
    this.dtitular = titular;
    this._edad = edad;
    this.dcantidad = cantidad;
    this.dbonificacion = bonificacion;
   
    }
    get bonificacion (){
        return this.dbonificacion;
    }
    set bonificacion (bonificacion){
        this.dbonificacion = bonificacion;
    }
    get cantidad(){
        return this.dcantidad;
    }

    get edad (){
        return this._edad;
    }
   set edad(edad){
       this._edad = edad ;          
   }
    boni(){
        if ( this._edad>=18 &&this._edad<=25  ){
        return "la cuenta con el nombre  "  +  this.dtitular  +  " tiene una bonificacion  "  +  this.dbonificacion + " porciento"
        }
         else {
             return "verifica tus datos "
         }
        
    }
    Titular (){
        if ( this._edad>=18 &&this._edad<=25  ){
        return "tus datos son correctos  ";
    }
     
        
        else {
            return "verfica tus datos  ";
       
        

    }
}
    retirar (cantidad){
        if ( this._edad>=18 && this._edad<=25  ){
            if (cantidad > 0){
                this.dcantidad = this.dcantidad - cantidad;
                return "cantidad a retirar " + cantidad;
            }
            

            }
            else {
                return "no puedes realizar retiro verifica tus datos  ";
        }
    

    }
}


nuevac = new Cuentadan ("daniel", 14,0, 16);
console.log(nuevac.Titular());
console.log(nuevac.retirar(800000));
console.log (nuevac.boni());

