const Aluno = require('../models/aluno');

const buscarTodos = (req, res) => {
    Aluno.find({}, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result || {})
        }
    });
}

const buscarPorId = (req, res) => {
    var id = req.body.id;
    Aluno.findById(id, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    });
}

const registrarAluno = (req, res) => {
    Aluno.insertMany(req.body, (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result)
        }
    });
}

module.exports = { buscarTodos, buscarPorId, registrarAluno };