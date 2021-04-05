const express = require('express');
const alunoRouter = express.Router();
const Aluno = require('../models/aluno');
const ListaMaterial = require ('../models/listaMaterial')
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const {alunoSchema} = require('../utils/schemasValidation');
const { isLoggedIn } = require('../middleware/isLoggedIn');
const cadastroUpload = require('../middleware/cadastroUpload');
const analiseUpload = require('../middleware/analiseUpload');
const transformText = require('../utils/transformText');
const {materialEscolar} = require('../utils/materialList');

const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

const fieldsCadastro = [
    {name: 'aluno[matricula]', maxCount: 1},
    {name: 'aluno[rg]', maxCount: 1}
];

const fieldsAnalise = [
    {name: 'aluno[renda]', maxCount: 1},
    {name: 'aluno[residencia]', maxCount: 1}
];

const validateAluno = (req, res, next) => {
    const { error } = alunoSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

alunoRouter.get('/registrar', (req, res) => {
    res.render('registrar-aluno', {estados});
});

alunoRouter.post('/registrar', [validateAluno, cadastroUpload.fields(fieldsCadastro)], catchAsync(async (req, res) => {
    const aluno = (req.body.aluno);
    const criarAluno = new Aluno(aluno);
    const registrarAluno = await Aluno.register(criarAluno, aluno.password);
    req.flash('success', 'Cadastrado com sucesso');
    res.redirect('/login');
}));

alunoRouter.get('/solicitar', isLoggedIn, (req, res) => {
    res.render('escolha-solicite');
});

alunoRouter.get('/solicitar/material', isLoggedIn, (req, res) => {
    res.render('solicite-doacao', {materialEscolar});
})

alunoRouter.post('/solicitar', isLoggedIn, catchAsync(async(req, res) => {
    const {_id} = req.user;
    const aluno = await Aluno.findById(_id);
    const {tipoMaterial, materialDesc} = req.body.listaMaterial;
    const listaMaterial = new ListaMaterial({tipoMaterial: tipoMaterial, materialDesc: transformText(materialDesc)});
    aluno.listaMateriais.push(listaMaterial);
    await listaMaterial.save();
    await aluno.save();
    res.redirect('/aluno/solicitar/analise');
}));

alunoRouter.get('/solicitar/analise', isLoggedIn, (req, res) => {
    res.render('analise')
});

alunoRouter.post('/solicitar/analise', [isLoggedIn, analiseUpload.fields(fieldsAnalise)], (req, res) => {
    req.flash('success', 'Solicitação enviada com sucesso');
    res.redirect('/aluno/solicitar/obrigado')
});

alunoRouter.get('/solicitar/obrigado', isLoggedIn, (req, res) => {
    res.render('agradecimento');
});

module.exports = alunoRouter;



