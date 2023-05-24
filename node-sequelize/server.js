
const express = require("express");

const routes = require("./routes.js");
const db = require("./src/db.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Cria a tabela, se a tabela já exister, não faz nada
db.sync().then(() => {
    console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));