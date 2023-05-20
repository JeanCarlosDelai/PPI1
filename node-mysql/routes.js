// Importando as dependências do projeto
const express = require('express');

// Referencia ao db.js
const db = require("./db");

// O objeto routes é uma instância da classe Router fornecida pelo Express. 
// Ele permite definir rotas e lógica de manipulação de solicitações HTTP específicas para esse roteador.
const routes = express.Router();

// Associa as rotas ao seu método do db.js
routes.get('/authors',db.selectAuthors);
routes.post('/authors',db.insertAuthor);
routes.put('/authors/:id',db.updateAuthor);
routes.delete('/authors/:id',db.deleteAuthor);

//Exportando os módulos para outros arquivos
module.exports = routes;