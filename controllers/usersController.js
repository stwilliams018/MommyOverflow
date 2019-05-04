const db = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {    
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log('asdf');
const email = req.body.email;
  const password = req.body.password;  
  
// Find user by email
db.User.findOne({ email }).then(user => {
  
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    
// Check password
    bcrypt.compare(password, user.password).then(res => {
      
      if (password === user.password) {
        
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
        
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });


  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  
};
