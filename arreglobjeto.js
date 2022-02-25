let personas = [
    {nombre:"Juan",edad:32},
    {nombre:"Catalina",edad:45},
    {nombre:"Romeo",edad:23},
    {nombre:"Sergio",edad:34},
    {nombre:"Sebas",edad:19}
]

// array metodos
// 1. filtrado

let filtrado=personas.filter(persona=>persona.edad < 30)

console.log(filtrado)


// 2. mapear

/*let mapeado = personas.map(function(persona){
    return(persona.nombre+" en medallo tu vive")
})*/

let mapeado = personas.map(persona=>persona.nombre+" en medallo tu vive y tienes "+persona.edad)

console.log(mapeado)

// 3. foreach
// Para cada uno
/*
personas.forEach(function(persona){
    console.log(`Hola ${persona.nombre}, tu edad es ${persona.edad}`)
})
*/

personas.forEach(persona=>console.log(`Hola ${persona.nombre}, tuu edad es ${persona.edad}`))
