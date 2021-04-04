const mongoose = require('mongoose')

const listaMaterialSchema = new mongoose.Schema({
    tipoMaterial: [{
        type: String,
        required: true
    }],
    materialDesc: {
        type: String,
        maxlength: 500
    }
})

module.exports = mongoose.model('Material', listaMaterialSchema);