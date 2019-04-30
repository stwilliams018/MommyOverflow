const mongoose = require("mongoose");
const Answer = require('./answer.js');
const User = require('./user.js');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: { type: String, required: true },
  user: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  answers : [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
