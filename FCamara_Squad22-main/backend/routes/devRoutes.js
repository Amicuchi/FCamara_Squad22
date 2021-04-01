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



module.exports = devRouter;