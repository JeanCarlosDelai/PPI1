// Importação do express e do mysql2
const express = require("express");
const mysql = require('mysql2');

// Cria uma aplicação Express
const app = express();

//Permitir enviar dados para a App no formato JSON
app.use(express.json());

// Redireciona o caminho http://localhost:3000/api para o routes
app.use('/api', require('./routes'));


// Inicia o servidor na porta '3000'
app.listen(3000, () => {
    console.log("Exemplo de aplicativo ouvindo a porta 3000");
});