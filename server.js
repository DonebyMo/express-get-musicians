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

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});
