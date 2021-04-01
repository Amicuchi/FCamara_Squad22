const express = require('express');
const passport = require('passport');
const { isLoggedIn } = require('../middleware/isLoggedIn');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.render('historia');
});

indexRouter.get('/login', (req, res) => {
    res.render('entrar');
});

indexRouter.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
    res.redirect('/dashboard');
});

indexRouter.get('/pesquisa', (req, res) => {
    res.render('schoolResults');
});

indexRouter.get('/dashboard', isLoggedIn, (req, res) => {
    const {nomeResponsavel} = req.user;
    res.render('dashboard', {nomeResponsavel});
});

indexRouter.get('/doar', (req, res) => {
    res.render('doar');
});

module.exports = indexRouter;