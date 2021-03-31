const express = require('express')

module.exports = function (server) {
    const AlunoController = require('../../api/controllers/AlunoController');
    const alunoApi = express.Router();
    server.use('/aluno', alunoApi);
    alunoApi.get('/buscar-todos', AlunoController.buscarTodos);
    alunoApi.post('/buscar-por-id', AlunoController.buscarPorId);
    alunoApi.post('/registrar', AlunoController.registrarAluno);
}