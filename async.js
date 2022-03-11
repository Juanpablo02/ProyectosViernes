//function principal
function principal(){

    let promesa = new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("soy el proceso princnipal")
            let number = 5
            if(number>=5){
                resolve("termine (positivo)")
            } else {
                reject("termine (negativo)")
            }
        }, 2000);
    })
    return promesa
}

async function secundary(){
    try{
        await principal()
        console.log("soy el proceso del callback")
    }catch(error){
        console.log("error")
    }
}

secundary()
