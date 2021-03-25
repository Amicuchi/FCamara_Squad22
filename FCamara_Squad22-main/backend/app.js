const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Escola = require('./models/escola');
const app = express();

mongoose.connect('mongodb://localhost:27017/UpEDB', {
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

app.get('/registrar/escola', (req, res) => {
    res.render('registrar-escola');
})

app.post('/registrar', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})


app.listen('3000', () => {
    console.log('Escutando porta 3000');
});