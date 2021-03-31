const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const databaseUri = "mongodb+srv://PedroPataro:admin@upecluster.iudo1.mongodb.net/UpE" || 'mongodb://localhost:27017/UeP';

mongoose.connect(databaseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Conexão Aberta');
    })
    .catch((err) => {
        console.log('Erro na conexão');
        console.log(err);
    });