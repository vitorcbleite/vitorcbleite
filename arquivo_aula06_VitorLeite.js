
const {EventEmitter} = require ('events')


const cadastro = new EventEmitter();
const alunos = [{
    Nome: 'Thiago Leite',
    DatadeNascimento: "12/08/19??"
}];


cadastro.on('Alunos',(nome, dataNascimento) => {
    alunos.push({Nome: nome,DatadeNascimento: dataNascimento})
        console.table(alunos)

})


cadastro.emit('Alunos','Vitor Leite','27/07/1987' )
cadastro.emit('Alunos','Caio dos Santos', '23/09/1993') 
cadastro.emit('Alunos','Luisa Leite','19/12/1991')
cadastro.emit('Alunos','Suspeito04', '26/03/1998')