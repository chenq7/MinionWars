const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  points: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tweet = mongoose.model("Score", ScoreSchema);
