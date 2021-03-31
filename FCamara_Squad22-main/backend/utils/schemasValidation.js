const Joi = require('joi');

module.exports.alunoSchema = Joi.object({
    aluno: Joi.object({
        nome: Joi.string().required(),
        sobrenome: Joi.string().required(),
        rg: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required().min(6),
        endereco: Joi.string().required(),
        endereco2: Joi.string().required(),
        nomeResponsavelLegal: Joi.string().required(),
        sobrenome: Joi.string().required(),
        escola: Joi.string().required(),
        cidade: Joi.string().required(),
        estado: Joi.string().required(),
        cep: Joi.string().required(),
    }).required()
})