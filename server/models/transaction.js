const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  id_: Schema.Types.ObjectId,
  user_id: {type: Schema.Types.ObjectId, required: true},
  symbol: {type: String, required: true},
  quantity: {type: Number, required: true},
  price_bought: {type: Number, required: true}
},
{
  timestamps: true
});

module.exports = mongoose.model("Transaction", transactionSchema);