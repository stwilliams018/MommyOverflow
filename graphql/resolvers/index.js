const authResolver = require('./auth');
const questionsResolver = require('./questions');
const answerResolver = require('./answer');

const rootResolver = {
  ...authResolver,
  ...questionsResolver,
  ...answerResolver
};

module.exports = rootResolver;