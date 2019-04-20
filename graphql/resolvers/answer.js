const Question = require('../../models/question');
const Answer = require('../../models/answer');
const {transformAnswer,transformQuestion} = require('./merge');

module.exports = {    
    answers: async (args,req) => {
        if (!req.isAuth) {
            throw new Error('unauthenticated!');
        }
        try {
            const answers = await Answer.find();
            return answers.map(answer => {
                return transformAnswer(answer);
            });
        } catch (err) {
            throw err;
        }
    },
    createAnswer: async (args,req) => {
        if (!req.isAuth) {
            throw new Error('unauthenticated!');
        }
        const fetchedQuestion = await Question.findOne({ _id: args.questionId });
        const answer = new Answer( {
            user: req.userId,
            answer: args.questionInput.answer,
            score: args.questionInput.score,    
            question: fetchedQuestion
        });
        const result = await answer.save();
        return transformAnswer(result);
    },
    cancelAnswer: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('unauthenticated!');
        }
        try {
            const answer = await Answer.findById(args.answerId).populate('question');
            const question = transformQuestion(answer.question);
            await Answer.deleteOne({_id:args.answerId});
            return question;
        } catch (err) {
            throw err;
        }
    }
};