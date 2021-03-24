const mongoose = require('mongoose')
const escola = require('./api/escola/escola')
require('./config/database')

// const Escola = mongoose.model('escola')

new escola({
    nome: 'Escola Estadual Harue Matsumoto Asakawa',
    cnpj: 25424526000120,
    email: 'e917199a@see.sp.gov.br',
    logradouro: 'Bem-te-vi',
    numero: 180,
    telefone: 1434789898,
    bairro: 'Jardim Esplanada',
    cidade: 'Bastos',
    estado: 'São Paulo',
    senha: '123456'

}).save().then(() => {
    console.log('Usuario cadastrado com sucesso!')
}).catch((err) => {
    console.log(`Houve um erro ao registrar o usuário: ${err}`)
})
