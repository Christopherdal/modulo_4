// se pueden definir los atributos con o sin comillas
var Alumnos= [
    {
        nombre :"jose luis",
        cursos :[
            {
                nombre :"javascript",
                notas  :[10,20,30]
            },
            {
                nombre :"Typescript",
                notas  :[30,50,80]
            }
        ]
    }
    ,

    // {
    //     nombre :"christopher",
    //     cursos :
    //     [
    //         {
    //             nombre_curso :"javascript"
    //         },

    //         {
    //             nombre_curso :"Angular"
    //         }
    //     ]
    // }
]


// console.log("Nombre del primer alumno es: " + Alumnos[0].nombre);
// console.log("Nombre del segundo alumno es: " + Alumnos[1].nombre);
// console.log("curso visto:" +Alumnos[1].cursos[0].nombre_curso);
// console.log("curso visto:" +Alumnos[1].cursos[1].nombre_curso);
for(i=0;i<Alumnos.length;i++){
    console.log("Nombre del alumno "+(i+1)+":"+Alumnos[i].nombre)
    for(j=0;j<Alumnos[i].cursos.length;j++){

        console.log("curso "+(j+1)+":"+Alumnos[i].cursos[j].nombre)
        console.log("las notas del alumno en el curso son:")
        for(k=0;k<Alumnos[i].cursos[j].notas.length;k++){
            console.log(Alumnos[i].cursos[j].notas[k])
        }
    }
}
console.log("---------------------------------------------");
