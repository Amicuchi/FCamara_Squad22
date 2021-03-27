const mongoose = require('mongoose');

const categorias = ['Tintas', 'Cadernos', 'Livros'];

const AlunoSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    sobrenome: {
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
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cep: {
        type: Number,
        required: true
    }
})



module.exports = mongoose.model('Aluno', AlunoSchema);