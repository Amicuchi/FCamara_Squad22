const express = require('express');
const passport = require('passport');
const indexRouter = express.Router();
const { isLoggedIn } = require('../middleware/isLoggedIn');
const Aluno = require('../models/aluno');
const ListaMaterial = require('../models/listaMaterial');
const catchAsync = require('../utils/catchAsync');

indexRouter.get('/', (req, res) => {
    res.render('historia');
});

indexRouter.get('/login', (req, res) => {
    res.render('entrar');
});

indexRouter.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
    res.redirect('/dashboard');
});

indexRouter.get('/dashboard', isLoggedIn, (req, res) => {
    const {nomeResponsavel} = req.user;
    res.render('dashboard', {nomeResponsavel});
});

indexRouter.get('/doar', catchAsync(async(req, res) => {
    const alunos = await Aluno.find({})
    res.render('doar', {alunos});
}));

indexRouter.get('/pesquisa', catchAsync(async(req, res) => {
    const {qType, q} = req.query;
    if (qType === 'escola') {
        const alunos = await Aluno.find({escola : { $regex: q}}).populate('listaMateriais');
        return res.render('schoolResults', {alunos})
    } else if (qType === 'tipoMaterial') {
        const material = await ListaMaterial.find({$or: [
            {tipoMaterial: {$regex: q}},
            {materialDesc: {$regex: q}}
        ]});
        for (m of material) {
            const alunos = await Aluno.find({listaMateriais: {$in: m._id}}).populate('listaMateriais');
            console.log(alunos)
            return res.render('schoolResults', {alunos})
        }
    }
}))

module.exports = indexRouter;