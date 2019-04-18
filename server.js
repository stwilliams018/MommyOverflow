const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const path = require('path');
const isAuth = require('./middleware/is-auth');

const port = process.env.PORT || 5000;

const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use('/graphql', graphqlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
})
);


//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
})


//DB Config
const db = require('./config/keys').mongoURI;

/* mongoose.connect("mongodb://chuck:password1@ds143156.mlab.com:43156/heroku_8l7l35pg"
).then(() => {
  //start server
  app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
  })

})
  .catch(err => {
    console.log(err);
  }); */

mongoose.connect(db, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
})

//Connecting to the server

app.listen(port, () => console.log(`Server is running on port ${port}`));