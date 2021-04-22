const express = require('express');
const segundaRota = express.Router();

segundaRota.post('', (req, resp) => {
    let body = req.body;
    resp.send(`Informações do curso.\nCurso: ${body.curso}\nEmpresa: ${body.empresa}\nProfessor: ${body.professor}`);
});

segundaRota.put('/:identificador', (req, resp) => {
    resp.send(`Metodo PUT utilizado para atualizar o id: ${req.params.identificador}`);
});

segundaRota.patch('/:identificador', (req, resp) => {
    resp.send(`Metodo PATCH utilizado para atualizar o id: ${req.params.identificador}`);
});

segundaRota.delete('/:identificador', (req, resp) => {
    resp.send(`Metodo DELETE utilizado para atualizar o id: ${req.params.identificador}`);
});

module.exports = segundaRota;