const Joi = require('joi');

module.exports.alunoSchema = Joi.object({
    aluno: Joi.object({
        nomeResponsavel: Joi.string().required(),
        sobrenomeResponsavel: Joi.string().required(),
        cidade: Joi.string().required(),
        estado: Joi.string().required(),
        logradouro: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required().min(8),
        nomeAluno: Joi.string().required(),
        sobrenomeAluno: Joi.string().required(),
        escola: Joi.string().required(),
    }).required()
})