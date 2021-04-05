const express = require('express');
const devRouter = express.Router();

/* 
Exemplo de como criar a rota
devRouter.get('/nome do arquivo', (req, res) => {
    res.render('nome do arquivo')
}) */
devRouter.get('/historia', (req, res) => {
    res.render('historia')
})
devRouter.get('/solicite-doacao', (req, res) => {
    res.render('solicite-doacao')
})
devRouter.get('/analise', (req, res) => {
    res.render('analise')
})
devRouter.get('/escolha-solicite', (req, res) => {
    res.render('escolha-solicite')
})
devRouter.get('/agradecimento', (req, res) => {
    res.render('agradecimento')
})

module.exports = devRouter;