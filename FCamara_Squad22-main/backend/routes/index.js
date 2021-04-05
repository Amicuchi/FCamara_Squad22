const express = require('express');
const passport = require('passport');
const indexRouter = express.Router();
const { isLoggedIn } = require('../middleware/isLoggedIn');
const Aluno = require('../models/aluno');
const ListaMaterial = require('../models/listaMaterial');
const catchAsync = require('../utils/catchAsync');
const transformText = require('../utils/transformText');
const {materialEscolar} = require('../utils/materialList');

indexRouter.get('/', (req, res) => {
    res.render('historia');
});

indexRouter.get('/login', (req, res) => {
    res.render('entrar');
});

indexRouter.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), (req, res) => {
    res.redirect('/dashboard');
});

indexRouter.get('/dashboard', isLoggedIn, (req, res) => {
    const {nomeResponsavel} = req.user;
    res.render('dashboard', {nomeResponsavel});
});

indexRouter.get('/doar', catchAsync(async(req, res) => {
    const alunos = await Aluno.find({})
    res.render('doar', {alunos, materialEscolar});
}));

indexRouter.get('/pesquisa', catchAsync(async(req, res) => {
    const {q} = req.query;
    if (q){
        const material = await ListaMaterial.find({tipoMaterial: {$regex: transformText(q)}}); 
        const alunos = await Aluno.find({listaMateriais: {$in: material}});
        return res.render('schoolResults', {alunos, materialEscolar})
    } else {
        return res.redirect('/doar')
    }

}))

indexRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = indexRouter;