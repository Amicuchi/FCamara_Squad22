const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');

const ExpressError = require('./utils/ExpressError');
const Aluno = require('./models/aluno');
const indexRoutes = require('./routes/index');
const alunoRoutes = require('./routes/aluno');
const devRoutes = require('./routes/devRoutes');

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
    
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

const secret = process.env.SECRET || 'thisshouldbeabettersecret!'

const sessionConfig = {
    secret: secret,
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
app.use(flash())

app.use(passport.initialize());
app.use(passport.session());

passport.use(Aluno.createStrategy());

passport.serializeUser(Aluno.serializeUser());
passport.deserializeUser(Aluno.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// ROTAS PARA PAGINAS
app.use('/', indexRoutes);

app.use('/aluno', alunoRoutes);

app.use('/', devRoutes);

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Ops! Alguma coisa deu errado.'
    if (err.message.includes('already registered')) err.message = 'Email já cadastrado'
    req.flash('error', err.message)
    res.redirect('back')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Escutando porta ${port}`);
});