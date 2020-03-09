const express = require('express');
const app = express();
require('dotenv').config();

const PORT = 3001;

//
// App Configuration
//

app.use(express.json());


/*********************************************************
* Connecting to Mongo Database
**********************************************************/
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

app.get('/', (req,res) => {
  res.send("Connection made to API")
})

app.use('/account', ACCOUNT_ROUTE);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))