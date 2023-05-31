app.post("/jogos", async (req, res) => {
  try {
    const collection = client.db("bancoSteam").collection("jogos");
    const result = await collection.insertOne(req.body);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao adicionar jogo ao banco de dados");
  }
});
