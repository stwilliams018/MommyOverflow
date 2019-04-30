const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const routes = require("./routes");
const users = require('./routes/api/users');
const questions = require('./routes/api/questions');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//DB Config
const db = require('./config/keys').mongoURI;

//connection to mongodb
/* mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err)) */
/* mongoose.connect(
process.env.MONGODB_URI || "mongodb://localhost/developernetwork"
); */

// Define middleware here

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

mongoose.connect('mongodb://chuck:password1@ds143156.mlab.com:43156/heroku_8l7l35pg', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

//Use Routes
app.use('/api/users', users);
app.use('/api/questions', questions);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

