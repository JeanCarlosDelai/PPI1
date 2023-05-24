
const Client = require('../models/Client');

module.exports = {
    // findAll – Lista os registros da tabela clients
    async findAll(req, res) {
        try {
            //
            const clients = await Client.findAll();
            return res.json(clients);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    // show – Retorna os dados de um registro específico
    async show(req, res) {
        try {
            // .findByPk() nós buscamos os registros pela chave primária
            const client = await Client.findByPk(req.params.id);
            return res.json(client);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    // store – Salva o novo item na tabela clients
    async store(req, res) {
        try {
            // .create() nós criamos um novo cliente
            const client = await Client.create(req.body);
            return res.json(client);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    //  update – Atualiza um registro existente
    async update(req, res) {
        try {
            const client = await Client.findByPk(req.params.id);
            // .update() nós atualizamos um cliente específico
            await client.update(req.body);
            return res.json({ client });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
    // destroy – Exclui um registro específico
    async destroy(req, res) {
        try {
            const client = await Client.findByPk(req.params.id);
            //  .destroy() nós excluímos um cliente específico.
            await client.destroy();
            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
