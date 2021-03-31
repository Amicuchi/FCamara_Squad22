const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const alunoSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    rg: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        min: 6,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    endereco2: {
        type: String,
        required: true
    },
    nomeResponsavelLegal: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    escola: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    }
})

alunoSchema.plugin(passportLocalMongoose, {usernameField: 'email'})

module.exports = mongoose.model('Aluno', alunoSchema);