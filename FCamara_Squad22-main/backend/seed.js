const mongoose = require('mongoose');
const Aluno = require('./models/aluno');

require('dotenv').config();

const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/UeP';

mongoose.connect(databaseUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Aluno.deleteMany({});
    for (let i = 0; i < 7; i++) {
        const aluno = new Aluno({
            nome: 'Jóse',
            sobrenome: 'Augusto',
            email: 'quale@email.com',
            senha: 'senha',
            endereco: 'rua não ligo, 10',
            endereco2: 'ap 10',
            cidade: 'tantufaz',
            estado: 'NB',
            cep: 10350540,
        })
        await aluno.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})
