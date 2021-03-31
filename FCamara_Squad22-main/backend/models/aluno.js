const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const categorias = ['Tintas', 'Cadernos', 'Livros'];

const alunoSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
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