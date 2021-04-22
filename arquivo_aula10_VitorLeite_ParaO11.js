/**Utilizando Funções assyncronas ASYNC/AWAIT, utilize o arquivo criado 
 * na aula anterior e realize os ajustes necessários para que a 
 * implementação da aula anterior seja feita utilizando ASYNC/AWAIT. */
function calculaSalarioProgressivo(valor){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if( valor > 0 ) {
            
                resultado = valor * 0.85 * 0.88 * 0.95
                resolve( resultado)
            } else { reject(valor/10) }
            //reject(resultado/10)
        }, 5000); //2segundos
    })
}

async function main(v){
    try{
        let retorno = await calculaSalarioProgressivo(v)
        console.log(`Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ ${retorno}`)
    }catch(error){
        console.log(`Valor de ERROR: ${error}`)
    }
}
const textoTela = 'Esse eh o arquivo 10 importado no arquivo 11.'
module.exports = {main, textoTela}

/*
calculaSalarioProgressivo(10000)
.then((retorno) =>{
    console.log(`valor de retorno: ${retorno}`)
})
.catch((error)=>{
    console.log(`valor de ERROR: ${error}`)
})*/