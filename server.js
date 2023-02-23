const express = require("express");
const app = express();
const { Musician } = require("./Musician");
const { sequelize } = require("./db");

const port = 3000;

//TODO
app.get("/musicians", async (request, response) => {
  const musicians = await Musician.findAll();
  await response.json(musicians);
});

app.get("/musicians/:id", async (req, res) => {
  const musician = await Musician.findByPk(req.params.id);
  await res.json(musician);
});
app.use(express.json());

app.post("/musicians/:id", async (req, res) => {
  const musician1 = await Musician.create(req.body);
  await res.send(musician1);
});

app.put("/musicians/:id", async (req, res) => {
  const musician = await Musician.update(
    { name: "emik" },
    { where: { id: req.params.id } }
  );
  await res.send(musician);
});

app.delete("/musicians/:id", async (req, res) => {
  await Musician.destroy({ where: { id: req.params.id }, force: true });
  await res.send("Successful DELETE Request made!");
});

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});
