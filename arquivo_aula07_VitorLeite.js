/**Utilizando o modulo 'console', exiba mensagem no terminal, conforme enuciados abaixo.

1. Exiba um ERROR com a mensagem: 'Mensagem de ERROR enviada por Seu_Nome'
2. Exiba em forma de tabela, uma lista de profissões aleatórias
3. Exiba em forma de tabela, informações pessoais de Nome, Endereço, Telefone, 
Data de Nascimento,  CEP, Município e Estado */
console.time('tempo')
const {EventEmitter} = require ('events')
//01 Erro
console.error(new Error('Mensagem de ERROR enviada por Vitor Leite'))
//02 Profissoes Random
const profissoes = ['Programador','Tecnico','DBA','Testador','Secretariado','Assistente','Analista']
console.table(profissoes)
//03 Info Pessoal
const cadastro = new EventEmitter();
const alunos = [{
    Nome: 'Thiago Leite',
    Endereco: 'SQS xxx Bloco xx Apto xxx',
    Telefone: '0619xxxxxxxx',
    DatadeNascimento: "12/08/19??",
    CEP: "70200-000",
    Municipio: 'Brasilia',
    Estado: 'DF'
}];


cadastro.on('Alunos',(nome, endereco, telefone, dataNascimento, cep, municipio, estado) => {
    alunos.push({Nome: nome,Endereco: endereco,Telefone: telefone,DatadeNascimento: dataNascimento,
        CEP: cep,Municipio: municipio,Estado: estado})
        console.table(alunos)

})

/**Nome: 'Thiago Leite',
    Endereco: 'SQS xxx Bloco xx Apto xxx',
    Telefone: '0619xxxxxxxx',
    DatadeNascimento: "12/08/19??",
    CEP: "70200-000",
    Municipio: 'Brasilia',
    Estado: 'DF' */
cadastro.emit('Alunos','Vitor Leite','SQS 407 Bloco A apto 305','061992316901','27/07/1987','70256-010','Brasolia','DF' )
cadastro.emit('Alunos','Caio dos Santos','','', '23/09/1993','','') 
cadastro.emit('Alunos',"Luisa Leite","","","19/12/1991","","")
cadastro.emit('Alunos','Suspeito04',"Palacio da Alvorada","", '26/03/1998','70200-000',"Brasilia",'DF')
console.timeEnd('tempo')