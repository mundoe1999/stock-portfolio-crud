const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var accountSchema = new Schema({
  id_: Schema.Types.ObjectId,
  name: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});

module.exports = mongoose.model("Account", accountSchema);

module.exports.encryptPassword = function(toHash, salt, callback){
  bcrypt.hash(toHash, salt, (err, hash) => {
    if(err) console.log(err);
    else callback(null, hash);
  });
}

module.exports.comparePassword = function(toTest, hash, callback) {
  bcrypt.compare(toTest, hash, (err,match) => {
    if(err) throw err;
    else callback(null, match);
  });
}