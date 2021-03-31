module.exports = function (server) {
    const alunoRouter = require('./alunoRoute');
    alunoRouter(server);

    const pedidoRouter = require('./pedidoRoute');
    pedidoRouter(server);
}