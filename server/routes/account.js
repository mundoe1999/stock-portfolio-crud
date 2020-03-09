const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

// Model
const mongoose = require('mongoose');
const Account = require('../models/account');


/***************************
 * Passport related configuration
 ********************************/

 passport.serializeUser( (user, done) => {
   done(null, user._id);
 });

 passport.deserializeUser( (id, done) => {
   Account.findById(id, (err,user) => {
     done(err, user);
   });
 });

 passport.use(
   new LocalStrategy((email, password, done) => {
    Account.findOne({
      email: email
    })
    .then(user => {
      // User has not been found
      if(!user) return done(null, false);

      // Compare passwords
      bcrypt.compare(password, user.password, (err,matched) => {
        if(err) throw err;
        // Password Matches
        if(matched) return done(null, user);
        //Password Fails
        return done(null, false);
      });
    })
    .catch(err => console.log(err));
   })
 );

 // **************************************************************************
 // Routes
 // **************************************************************************

router.get('/', (req, res) => {
  // Should receive JWT
  // 
  res.send("Hello Login");
});

router.post('/register', (req,res) => {

  bcrypt.genSalt(12, (err,salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      Account.findOne({
          email: req.body.email
      }, (err, account) => {
        // If error received through the Query
        if(err){
          res.status(404);
          console.log(err);
        }
        // If account exists with email
        if(account)
          return res.status(409).json({message: "Account with Email Exists"});

        // Generate Account object
        let accountObject = {
          _id: new mongoose.Types.ObjectId(),
          email: req.body.email,
          name: req.body.name,
          password: hash
        };

        // Generate account
        const _account = new Account(accountObject);
        _account
          .save()
          .then( result => {
            res.status(200).json(result);
            console.log("Account Created");
          })
          .catch( error => {
            console.log(error);
            res.status(409).json({message: "Please fill all fields!"});
          });

      });
    })
  });
});

module.exports = router;