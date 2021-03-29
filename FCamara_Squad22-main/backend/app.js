const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Aluno = require('./models/aluno');
const app = express();

require('dotenv').config();

const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/UeP';

mongoose.connect(databaseUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Conexão Aberta');
    })
    .catch((err) => {
        console.log('Erro na conexão');
        console.log(err);
    });

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, '../frontend/public')));


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../frontend/views'));

app.get('/', (req, res) => {
    res.render('index');
});

const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

app.get('/registrar', (req, res) => {
    res.render('registrar-aluno', {estados});
})

app.post('/registrar', async (req, res) => {
    const aluno = new Aluno(req.body.aluno)
    await aluno.save();
    res.redirect('/');
})

app.get('/login', (req, res) => {
    res.render('index');
})

app.get('/pesquisa', (req, res) => {
    res.render('schoolResults');
})

app.get('/aluno/doacao/obrigado', (req, res) => {
    res.render('thanks');
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.get('/doar', (req, res) => {
    res.render('doar');
})

app.listen('3000', () => {
    console.log('Escutando porta 3000');
});