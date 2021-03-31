const pedido = require('../models/pedido')
const Pedido = require('../models/pedido')

const buscarDescricao = (req, res) => {
    Pedido.find({ descricao: req.body.descricao }, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result || {})
        }
    })
}

const inserirPedido = (req, res) => {
    Pedido.insertMany(req.body, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    })
}

const buscarTodos = (req, res) => {
    pedido.find({}, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result || {})
        }
    });
}
module.exports = { buscarDescricao, inserirPedido, buscarTodos }