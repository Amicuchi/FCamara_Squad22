const mongoose = require('mongoose');
const Escola = require('./models/escola');

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
    await Escola.deleteMany({});
    for (let i = 0; i < 7; i++) {
        const escola = new Escola({
            nome: 'Escola',
            cnpj: 12345678901234,
            telefone: 1234567890,
            email: 'escola@email.com',
            logradouro: 'rua não ligo',
            numero: 10,
            bairro: 'quem sabe',
            cidade: 'tantufaz',
            estado: 'NB',
            senha: '123456'
        })
        await escola.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})
