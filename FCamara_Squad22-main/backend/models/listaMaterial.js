const mongoose = require('mongoose')

const listaMaterialSchema = new mongoose.Schema({
    tipoMaterial: {
        type: String,
        required: true
    },
    qntMaterial: {
        type: Number,
        min: 1,
        required: true
    },
    materialDesc: {
        type: String,
        minlength: 10,
        maxlength: 500,
        required: true
    }
})

module.exports = mongoose.model('Material', listaMaterialSchema);