const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const listaMaterial = require('./listaMaterial');


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
    },
    listaMateriais: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Material'
        }
    ]
})

alunoSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

alunoSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await listaMaterial.deleteMany({
            _id: {
                $in: doc.listaMateriais
            }
        })
    }
});

module.exports = mongoose.model('Aluno', alunoSchema);