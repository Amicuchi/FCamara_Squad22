const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const alunoSchema = new mongoose.Schema({
    
    nomeResponsavel: {
        type: String,
        required: true
    },
    sobrenomeResponsavel: {
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
    logradouro: {
        type: String,
        required: true
    },
    nomeAluno: {
        type: String,
        required: true
    },
    sobrenomeAluno: {
        type: String,
        required: true
    },
    escola: {
        type: String,
        required: true
    }
})

alunoSchema.plugin(passportLocalMongoose, {usernameField: 'email'})

module.exports = mongoose.model('Aluno', alunoSchema);