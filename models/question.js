const mongoose = require("mongoose");
const Answer = require('./answer.js');
const User = require('./User.js');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: { type: String, required: true },
  user : [{ type: Schema.Types.ObjectId, ref: 'User' }],
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  answers : [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
