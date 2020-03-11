const express = require('express');
const app = express();
require('dotenv').config();

const PORT = 3001;

// **************************************************************************
// App Configuration
// **************************************************************************

// CORS setup
var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:3000'
}
app.use(cors(corsOptions));

// Passport Setup
var passport = require('passport');
const session = require('express-session');
app.use(express.json());

//Initialize passport 
require('./auth');
app.use(session({
  secret: 'test',
  saveUninitialized: false,
  resave: false
}))

app.use(passport.initialize());
app.use(passport.session());



// **************************************************************************
// Connecting to Mongo Database
// **************************************************************************
var mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open', () => {
  console.log("Connection with MongoDB established");
});

db.on('error', () => {
  console.error.bind(console, "MongoDB connection not established! :( ");
})


// **************************************************************************
// Route Setup
// **************************************************************************
const ACCOUNT_ROUTE = require('./routes/account');
const TRANSACTION_ROUTE = require('./routes/transaction');

app.get('/', (req,res) => {
  res.send("Connection made to API")
})

app.use('/account', ACCOUNT_ROUTE);
app.use('/stock', TRANSACTION_ROUTE);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))