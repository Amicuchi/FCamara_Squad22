const port = 3000
const express = require('express');
const path = require('path');
const server = express();
const allowCors = require('./cors')

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static(path.join(__dirname, '../frontend/public')));
server.use(allowCors)
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '../frontend/views'));

server.listen(port, () => {
    console.log('Escutando porta 3000');
});

module.exports = server;