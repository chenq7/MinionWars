const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MinionSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  
  name: {
    type: String,
    require: true
  },

  attack: {
    type: Number,
    required: true
  },

  defense: {
    type: Number,
    required: true
  },

  hp: {
    type: Number,
    required: true
  },

  rarity: {
    type: String,
    required: true
  },

  ability: {
    type: String
  },

  userId: {
    type: Number
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Minion = mongoose.model("Minion", MinionSchema);