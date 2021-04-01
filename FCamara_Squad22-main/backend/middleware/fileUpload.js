const { func } = require('joi');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, '../../Arquivos_Alunos'))
    },
    filename: function (req, file, callback) {
        const {aluno} = req.body;
        const filePrefix = `${aluno.nomeAluno}_${aluno.sobrenomeAluno}_`;
        callback(null, filePrefix + file.originalname);
    }
});

const fileUpload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 4
    }
})

module.exports = fileUpload;