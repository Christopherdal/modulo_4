function Seccion(nombre,numero){
    this.nombre=nombre;
    this.numero=numero;
}
var sec=new Seccion("javascript",2762);
console.log("objeto seccion convertido a string: "+JSON.stringify(sec))
var Alumno ={
    "nombre"    :"christopher",
    "curso"     :"javascript",
    "nota"      :80,
    "aprobado"  :false
}
// convertir objeto a string
console.log("objeto alumno convertido a string: "+JSON.stringify(Alumno))

var objetoString='{"producto":"monitor",'+'"color":"blanco",'+'"encendido":true}'
console.log
objeto=JSON.parse(objetoString);
console.log(objeto.color)