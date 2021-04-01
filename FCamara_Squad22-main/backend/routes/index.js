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

indexRouter.post('/login', passport.authenticate('local', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard');
});

indexRouter.get('/pesquisa', (req, res) => {
    res.render('schoolResults');
});

indexRouter.get('/dashboard', isLoggedIn, (req, res) => {
    const {nome} = req.user;
    res.render('dashboard', {nome});
});

indexRouter.get('/doar', (req, res) => {
    res.render('doar');
});

module.exports = indexRouter;