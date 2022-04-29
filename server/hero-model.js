const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const heroSchema = new Schema(
  {
    priority: { type: Number, required: true, unique: true },
    task: String,
    timedate: String
  },
  { autoIndex: false }
);

const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;
