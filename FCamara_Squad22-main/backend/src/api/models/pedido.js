const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
        maxlength: 200,
        minlength: 5
    },
    dataPedido: {
        type: Date,
        default: Date.now,
        required: false
    },
    dataRecebido: {
        type: Date,
        required: false
    }

})

module.exports = mongoose.model('Pedidos', PedidoSchema);