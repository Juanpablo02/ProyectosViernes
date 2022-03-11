//function principal
function principal(){

        let promesa = new Promise(function(resolve,reject){
            setTimeout(() => {
                console.log("soy el proceso princnipal")
                let number = 5
                if(number>=10){
                    resolve("soy el proceos del callback (positivo)")
                } else {
                    reject("soy el proceso del callback (negativo)")
                }
            }, 2000);
        })
        return promesa
}
    

            



//llamando la funcion principal

principal().then(function(respuesta){
    console.log("hola positivo")
}).catch(function(){
    console.log("hola soy el catch")
})   
    

