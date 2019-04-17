const authResolver = require('./auth');
const eventsResolver = require('./events');
const cardResolver = require('./card');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...cardResolver
};

module.exports = rootResolver;