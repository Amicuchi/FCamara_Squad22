const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const ExpressError = require('./utils/ExpressError');
const Aluno = require('./models/aluno');
const indexRoutes = require('./routes/index');
const alunoRoutes = require('./routes/aluno');

const app = express();

require('dotenv').config();

const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/UeP';

mongoose.connect(databaseUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('Conexão com DB Aberta');
    })
    .catch((err) => {
        console.log('Erro na conexão');
        console.log(err);
    });

const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

passport.use(Aluno.createStrategy());

passport.serializeUser(Aluno.serializeUser());
passport.deserializeUser(Aluno.deserializeUser());

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
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
});


app.listen('3000', () => {
    console.log('Escutando porta 3000');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.get('/historia', (req, res) => {
    res.render('historia');
})

