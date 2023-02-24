const express = require("express");
const app = express();
// const { Musician } = require("./models/Musician");
const { sequelize } = require("./db");
const MusicianRouter = require("./routers/musicians");
app.use("/musicians", MusicianRouter);
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});

module.export = { app };
