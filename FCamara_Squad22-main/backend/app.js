const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ExpressError = require('./utils/ExpressError');
const indexRoutes = require('./routes/index');
const alunoRoutes = require('./routes/aluno');
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

// ROTAS PARA PAGINAS
app.use('/', indexRoutes);

app.use('/aluno', alunoRoutes);

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Ops! Alguma coisa deu errado.'
    res.status(statusCode).render('error', { err })
});


app.listen('3000', () => {
    console.log('Escutando porta 3000');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.get('/doar', (req, res) => {
    res.render('doar');
})

app.get('/historia', (req, res) => {
    res.render('historia');
})

app.get('/index', (req, res) => {
    res.render('index');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/menu-aluno', (req, res) => {
    res.render('menu-aluno');
})

app.get('/registrar', (req, res) => {
    res.render('registrar-aluno');
})

app.get('/pesquisa', (req, res) => {
    res.render('schoolResults');
})

app.get('/obrigado', (req, res) => {
    res.render('thanks');
})