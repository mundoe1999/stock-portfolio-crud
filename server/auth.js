const Account = require('./models/account');
const bcrypt = require('bcrypt');

var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;


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

passport.use( new LocalStrategy({
   usernameField: "email",
   passwordField: "password"
 },
 (username, password, done) => {
   Account.findOne({
     email: username
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