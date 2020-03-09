const express = require("express");
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const Transaction = require('../models/transaction');


 getLatestStock = (symbol) => {
  let url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote/latestPrice?token=${process.env.IEX_TOKEN}`;
  return axios
  .get(url)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log("Invalid Stock Symbol");
    return -1;
  });

}

router.get('/', (req, res) => {
  // Splits the authorization Header to get the JWT
  let token = req.header('authorization').split(' ');
 
    jwt.verify(token[1], 'secretKey', (err,decoded) => {
      if(!decoded){
        return res.status(500).json({transactions: []});
      }
      // Gets all Transactions
        Transaction.find({
          user_id: decoded.user._id
        })
        .sort('-createdAt')
        .exec((err, list) => {
          if(err){
            console.log(err);
            return res.status(500).json({transactions: []});
          }
          return res.status(200).json({transactions: list});
        });
    });
});

router.get('/group', (req,res) => {
    // Splits the authorization Header to get the JWT
    let token = req.header('authorization').split(' ');
 
    jwt.verify(token[1], 'secretKey', async (err,decoded) => {
      if(!decoded){
        return res.status(500).json({transactions: []});
      }
      // Gets all Transactions
        Transaction.aggregate([
          {$match: {user_id: mongoose.Types.ObjectId(decoded.user._id)}},
          {$group: 
            {_id:"$symbol", 
            totalStocks: 
              { $sum: "$quantity" }

            }
          }], async (err,list)=> {

            // Iterate through entire list and get total transactions
            for(let i = 0; i < list.length; i++){
              list[i].totalAmount = (list[i].totalStocks *  await getLatestStock(list[i]._id)).toFixed(2);
            }
            res.status(200).json({transactions:list})
          })
    });
})

router.post('/', (req,res) => {
  let token = req.header('authorization').split(' ');
  jwt.verify(token[1],'secretKey', async (err,decoded) => {
    // Calls Stock API to get Current price of stocks
    
    let price = await getLatestStock(req.body.symbol);

 
    let transactionObject = {
      _id: new mongoose.Types.ObjectId,
      user_id: decoded.user._id,
      symbol: req.body.symbol,
      quantity: req.body.quantity,
      price_bought: price
    }

    // Add transaction to database
    const _transaction = new Transaction(transactionObject);
    _transaction
      .save()
      .then( result => {
        res.status(200).json(result);
        console.log("Transaction Successfull!")
      })
      .catch( err => {
        console.log(err);
        res.status(409).json({message: "Transasction Failed"});
      })
    
  })
})

module.exports = router;