//Importando Dependências
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

//Config
    //DotEnv
    dotenv.config();
    //Definindo Porta
    const porta = process.env.PORTA || 5000;

    //CORS
    app.use(cors());

    //Express BodyParser
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    //Conexão com o MongoDB
    mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useFindAndModify: false,  useUnifiedTopology: true})
    .then(()=> console.log('Conectado ao Banco de Dados...'))
    .catch(err => console.log(`Erro ao se conectar ao Banco de Dados: ${err}`));

    //Importando Rotas
    const routeApi = require('./routes/api.js');

    //Usando rotas
    app.use('/', routeApi);

    app.listen(porta, ()=> console.log(`Escutando na porta ${porta}...`));