const { func } = require('joi');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, '../../Arquivos_Cadastro'))
    },
    filename: function (req, file, callback) {
        const {aluno} = req.body;
        const filePrefix = `${aluno.nomeAluno} ${aluno.sobrenomeAluno} `;
        callback(null, filePrefix + file.originalname);
    }
});

const cadastroUpload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 4
    }
})

module.exports = cadastroUpload;