//Declarando la funcion principal

function filtrarPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,buscarPlanos){
    let planos = [
        n1,n2,n3,n4,n5,n6,n7,n8,n9,n10
    ]

    let planosFiltrados = planos.filter(function(plano){
        return plano <= 10
    })

    buscarPlanos(planosFiltrados)
}
    //Llamar funcion princiapl

    filtrarPlanos(100,20,15,16,40,10,5,1,13,22,function(planos){
        if(planos.length > 0){
            console.log("Puede irse del planeta")
        } else {
            console.log("Siga buscando")
        }
    })
