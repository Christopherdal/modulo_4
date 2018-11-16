// aqui estoy asignando a una variable(funcion anonima:creo)  una funcion
calcular12Porc = function(precio){
    return precio*0.12
}//de esta manera solo se llama 
var carro={
    // atributos
    // si lo atributo estan definidos y no han tomado valor en ningun momento y llammos el atributo sera undefined
    "marca"        :"chevrolet",
    "modelo"       :"aveo",
    "año"          :2015,
    "año_compra"   :2018,
    "precioVenta"  :2000,     
    // metodos

    "resta"             :function(dato1,dato2)
    {
        return dato2-dato1
    },

    "mostrar_modelo"    :function(mensaje)
    {
        console.log(mensaje+" "+this.modelo)
    },

    "mostrar_caract_completas":function()
    {

    },
    "aumentarPrecio":function(aumento){
        this.precioVenta = this.precio*aumento;
    }
     ,
    // asignacion de una funcion a un metodo:desvetaja no se puede agregar el this.
    "calcularIva" :calcular12Porc
    

};
carro.dueño="christopher";
carro.precio=1000;
console.log("El carro es: "+carro.marca);//primera forma de ingresar a los atributos
console.log("El carro es: "+ carro["precio"]);//segunda forma de ingresar a los atributos
console.log("resultado de la resta: "+carro.resta(carro.año,carro.año_compra));
carro["mostrar_modelo"]("El modelo es:");
// 
carro.aumentarPrecio(10);
console.log("Precio con el aumento: "+carro.precioVenta);
