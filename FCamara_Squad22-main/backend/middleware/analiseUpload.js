const { func } = require('joi');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, '../../Arquivos_Analise'))
    },
    filename: function (req, file, callback) {
        const {nomeResponsavel, sobrenomeResponsavel} = req.user;
        const filePrefix = `${nomeResponsavel} ${sobrenomeResponsavel} `;
        callback(null, filePrefix + file.originalname);
    }
});

const analiseUpload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 4
    }
})

module.exports = analiseUpload;