const express = require("express");
const router = express.Router();
const { Musician } = require("../models/Musician.js");

router.get("/", async (request, response) => {
  const musicians = await Musician.findAll();
  await response.json(musicians);
});

router.get("/:id", async (req, res) => {
  const musician = await Musician.findByPk(req.params.id);
  await res.json(musician);
});
router.use(express.json());

router.post("/", async (req, res) => {
  const musician1 = await Musician.create(req.body);
  await res.send(musician1);
});

router.put("/:id", async (req, res) => {
  const musician = await Musician.update(
    { name: "Wilson" },
    { where: { id: req.params.id } }
  );
  await res.send(musician);
});

router.delete("/:id", async (req, res) => {
  await Musician.destroy({ where: { id: req.params.id }, force: true });
  await res.send("Successful DELETE Request made!");
});

module.exports = router;
