const express = require('express')

module.exports = function (server) {
    const PedidoController = require('../../api/controllers/PedidoController');
    const pedidoApi = express.Router();
    server.use('/pedido', pedidoApi)
    pedidoApi.post('/inserir-pedido', PedidoController.inserirPedido);
    pedidoApi.post('/buscar-por-descricao', PedidoController.buscarDescricao);
    pedidoApi.get('/buscar-todos', PedidoController.buscarTodos)

}