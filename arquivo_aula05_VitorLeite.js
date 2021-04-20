const http = require(`http`)

const host = '127.0.0.1'
const port = '9876'
const url = `http://${host}:${port}`

const server = http.createServer((req, resp)=>{
    resp.statusCode = 200
    resp.setHeader('Content-Type', 'text/html')
/**Utilizando o modulo 'http', crie um servidor web, utilizando a porta 9876, 
 * com código de resposta 200, mostrando no navegador o seu nome e o que vc 
 * espera aprender no curso de node JS, utilizando tags HTML, formatado conforme 
 * sua escolha.

Precisamos também mostrar uma mensagem no terminal, informando o endereço completo
 que o servidor web esta sendo executado. */
    resp.end('<h1> Ola professor Thiago Leite.</br></br><h2>Eu sou o programinha da aula05 do aluno</br> '+
    'Vitor Leite que espera se tornar apto a </br>desenvolver utilizando NodeJS ate o dim de </br>'+
    'suas aulas incrivelmente bem explicadas.</h2></h1>'+
    '<h1>Obrigado professor Thiago por nos disponibilizar aulas tao boas.</h1>')
})

server.listen(port, host, ()=>{
    console.log(`Server: ${url} is now running...`)
})