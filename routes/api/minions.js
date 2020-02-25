const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Minion = require("../../models/Minion");
const validateMinionInput = require("../../validation/minion");

router.get("/minions", (req, res) => {
  Minion.find()
    .sort({ date: -1 })
    .then(minions => res.json(minions))
    .catch(err => res.status(404).json({ nominionsfound: "No minions found" }));
});

router.get("/user/:user_id", (req, res) => {
  Minion.find({ user: req.params.user_id })
    .then(minions => res.json(minions))
    .catch(err =>
      res.status(404).json({ nominionsfound: "No minions found from that user" })
    );
});

router.get("/minions/:minion_id", (req, res) => {
  Minion.findById(req.params.id)
    .then(minon => res.json(minion))
    .catch(err =>
      res.status(404).json({ notminonfound: "No minion found with that ID" })
    );
});


router.post(
  "/minions/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    const { errors, isValid } = validateMinionInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newMinion = new Minion({
      url: req.body.url,
      attack: req.attack.id,
      defense: req.defense.id,
      hp: req.hp.id,
      rarity: req.rarity.id,
      ability: req.ability.id,
      userId: req.userId.id
    });

    newMinion.save().then(minion => res.json(minion));
  }
);

module.exports = router;