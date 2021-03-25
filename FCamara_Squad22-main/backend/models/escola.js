const mongoose = require('mongoose');

const EscolaUserSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    cnpj: {
        type: Number,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    email: {
        type: String || Number,
        required: true
    },
    logradouro: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    bairro: {
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
    senha: {
        type: String,
        min: 6,
        max: 12,
        required: true
    }
})

const Escola = mongoose.model('Escola', EscolaUserSchema);

module.exports = Escola;