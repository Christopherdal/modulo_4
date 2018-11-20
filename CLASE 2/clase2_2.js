$(document).ready(function(){
    console.log("se cargo la pagina");
    
    document.body.style.background="lightyellow"
})
$("h2").click(function(){
    alert(this.innerHTML)
})
$("#subtitulo").click(function(){
    console.log(this.innerHTML)
})
$("ol li").click(function(){
    alert(this.innerHTML)
})
// $("div").remove()

$("#agregar").click(function(){
    let dato = prompt("Introduzca un texto");
    $("ol").append("<li>"+dato+"</li>");
})
$("#esconder").click(function(){
    let x = $("ol") 
})
$("#eliminar").click(function(){
    let a=prompt("cual elemento de lista eliminar")
    let y=$(a)
    $(y).remove()
})
// $("#h11").click(function(){
//     $("#h12").height($("#h12").height()+10)
//     $("#h11").height($("#h11").height()+10)
// })
// $("#h12").click(function(){
//     $("#h11").height($("#h11").height()-10)
//     $("#h12").height($("#h12").height()-10)
// })

// $("#h11").click(function(){
//     $("#h12").height($("#h12").height()+10)
//     $("#h11").height($("#h11").height()+10)
// })

$("#h11").mousedown(function(){
    $("#h12").height($("#h12").height()+10)
    $("#h11").height($("#h11").height()+10)
})
$("#h12").mousedown(function(){
    $("#h11").height($("#h11").height()-10)
    $("#h12").height($("#h12").height()-10)
})

$("#h11").mousedown(function(){
    $("#h12").height($("#h12").height()+10)
    $("#h11").height($("#h11").height()+10)
})

