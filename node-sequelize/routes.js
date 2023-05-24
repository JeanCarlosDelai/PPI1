
// Importando as dependências do projeto
const express = require('express');
const clients = require("./src/controllers/ClientController");
const routes = express.Router();

// associa as rotas ao seu método do ClientController
routes.get('/clients', clients.findAll);
routes.get("/clients/:id", clients.show);
routes.post("/clients", clients.store);
routes.put("/clients/:id", clients.update);
routes.delete("/clients/:id", clients.destroy);

module.exports = routes;
