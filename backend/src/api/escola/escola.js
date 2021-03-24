const restful = require('node-restful')
const mongoose = restful.mongoose;

const EscolaUserSchema = mongoose.Schema({

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

module.exports = mongoose.model('escola', EscolaUserSchema)

