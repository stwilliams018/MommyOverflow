const mongoose = require("mongoose");
const Question = require('./question.js');
const User = require('./user.js');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  answer: { type: String, required: true },
  question: { type: Schema.Types.ObjectId, ref: 'Question' },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});



const Answer = mongoose.model("Answer", answerSchema);

//Apple now exists, so lets create a Product



module.exports = Answer;
