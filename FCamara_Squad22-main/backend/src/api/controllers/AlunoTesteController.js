const express = require('express');
const Aluno = require('./models/aluno');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/registrar', (req, res) => {
    res.render('registrar-aluno');
})

app.get('/aluno/buscar-todos', (req, res) => {
    Aluno.find({}, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result || {})
        }
    });
})

app.post('/aluno/buscar-por-id', (req, res) => {
    var id = req.body.id;
    Aluno.findById(id, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    });
})

app.post('/aluno/registrar', async (req, res) => {
    Aluno.insertMany(req.body, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    });
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/pesquisa', (req, res) => {
    res.render('schoolResults');
})

app.get('/aluno/doacao/obrigado', (req, res) => {
    res.render('thanks');
})