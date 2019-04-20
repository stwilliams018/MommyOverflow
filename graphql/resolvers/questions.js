const Question = require('../../models/question');
const User = require('../../models/user');
const { transformQuestion } = require('./merge');
  
module.exports = {
    questions: async () => {
      try {
        const questions = await Question.find();
        return questions.map(question => {
          return transformQuestion(question);
        });
      } catch (err) {
        throw err;
      }
    },
    createQuestion: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('unauthenticated!');
        }
      const question = new Question({
        title: args.questionInput.title,
        description: args.questionInput.description,
        category: args.questionInput.category,
        date: new Date(args.questionInput.date),
        creator: req.userId
      });
      let createdQuestion;
      console.log('sdf');
      try {
        const result = await question.save();
        createdQuestion = transformQuestion(result);
        const creator = await User.findById(req.userId);
  
        if (!creator) {
          throw new Error('User not found.');
        }
        creator.createdQuestions.push(question);
        await creator.save();
  
        return createdQuestion;
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  };