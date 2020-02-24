const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Score = require("../../models/score");
const validateScoreInput = require("../../validation/score");

router.get("/", (req, res) => {
  Score.find()
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ noscoresfound: "No scores found" }));
});

router.get("/user/:user_id", (req, res) => {
  Score.find({ user: req.params.user_id })
    .then(tweets => res.json(tweets))
    .catch(err =>
      res.status(404).json({ notweetsfound: "No scores found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Score.findById(req.params.id)
    .then(tweet => res.json(tweet))
    .catch(err =>
      res.status(404).json({ notweetfound: "No score found with that ID" })
    );
});




router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateScoreInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTweet = new Tweet({
      text: req.body.text,
      user: req.user.id
    });

    newTweet.save().then(tweet => res.json(tweet));
  }
);

module.exports = router;












module.exports = router;
