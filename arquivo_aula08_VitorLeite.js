/**Utilizando Funções assyncronas de CALLBACK (utilize a função setTimeout()
 *  solicitando para esperar 5 segundos), crie uma função calculaSalario()
 *  que calcula o salário líquido a partir do salário bruto e uma outra 
 * função mostraSalarioLiquido() que mostre no console a mensagem: 
 * "Salário do profissional, após descontos de FGTS, INSS e Vale alimentação
 *  é de: R$ (valor retornado)".

Valores a serem utilizados no exercício:

Valor Salário bruto: 10.000,00 reais
Desconto FGTS: 15%
Desconto INSS: 11%
Desconto Vale Alimentação: 5% */
/*
function calculaSalarioAritmetico(valor, callback){
    return setTimeout(() => {
        return callback(null, 0.69 * valor)
    }, 5000); //5segundos
}*/

function calculaSalarioProgressivo(valor){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resultado = valor * 0.85 * 0.88 * 0.95
            
            //resolve( resultado)
            reject(resultado-10)
        }, 2000); //5segundos
    })
}
/*
function mostraSalarioLiquido(err, retorno){
    if(err) throw err

    console.log('Salário do profissional, após descontos de FGTS, INSS e Vale alimentação'
        +` é de: R$ ${retorno}`)
} */

//calculaSalarioAritmetico(10000, mostraSalarioLiquido)



calculaSalarioProgressivo(10000)
.then((retorno) =>{
    console.log(`valor de retorno: ${retorno}`)
})
.catch((error)=>{
    console.log(`valor de ERROR: ${error}`)
})