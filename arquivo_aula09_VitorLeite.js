/**Utilizando Funções assyncronas PROMISES, utilize o arquivo criado na aula anterior e realize os ajustes 
 * necessários para que, ao invés de utilizar funções de CallBack, utilize Promises. */
function calculaSalarioProgressivo(valor){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resultado = valor * 0.85 * 0.88 * 0.95
            
            resolve( resultado)
            //reject(resultado/10)
        }, 2000); //2segundos
    })
}

async function main(){
    try{
        let retorno = await calculaSalarioProgressivo(10000)
        console.log(`Valor de Retorno: ${retorno}`)
    }catch(error){
        console.log(`Valor de ERROR: ${error}`)
    }
}
main()

/*
calculaSalarioProgressivo(10000)
.then((retorno) =>{
    console.log(`valor de retorno: ${retorno}`)
})
.catch((error)=>{
    console.log(`valor de ERROR: ${error}`)
})*/