import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import AllTransactionTable from '../tables/AllTransactionTable';
import NavBar from '../utils/NavBar';
import TransactionForm from '../forms/TransactionForm';

class TransactionPage extends Component{

  // Call the portfolio page here
  render(){
    return(
      <div>
        <NavBar/>
        <AllTransactionTable/>
        <TransactionForm/>
    
      </div>
    )
  } 
}

export default TransactionPage;