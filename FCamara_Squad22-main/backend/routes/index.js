const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.render('index');
});

indexRouter.get('/login', (req, res) => {
    res.render('index');
});

indexRouter.get('/pesquisa', (req, res) => {
    res.render('schoolResults');
});

indexRouter.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

indexRouter.get('/historia', (req, res) => {
    res.render('historia');
});

indexRouter.get('/doar', (req, res) => {
    res.render('doar');
});


module.exports = indexRouter;