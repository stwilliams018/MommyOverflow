const Question = require('../../models/question');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

const questions = async questionIds => {
  try {
    const questions = await Question.find({ _id: { $in: questionIds } });
    return questions.map(question => {
      return transformQuestion(question);
    });
  } catch (err) {
    throw err;
  }
};

const singleQuestion = async questionId => {
  try {
    const question = await Question.findById(questionId);
    return transformQuestion(question);
  } catch (err) {
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdQuestions: questions.bind(this, user._doc.createdQuestions)
    };
  } catch (err) {
    throw err;
  }
};

const transformQuestion = question => {
  return {
    ...question._doc,
    _id: question.id,
    date: dateToString(question._doc.date),
    creator: user.bind(this, question.creator)
  };
};

const transformAnswer = answer => {
  return {
    ...answer._doc,
    _id: answer.id,
    user: user.bind(this, answer._doc.user),
    question: singleQuestion.bind(this, answer._doc.question),
    createdAt: dateToString(answer._doc.createdAt),
    updatedAt: dateToString(answer._doc.updatedAt)
  };
};

exports.transformQuestion = transformQuestion;
exports.transformAnswer = transformAnswer;

// exports.user = user;
// exports.questions = questions;
// exports.singleQuestion = singleQuestion;