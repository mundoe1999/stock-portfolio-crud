import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import AllTransactionTable from '../tables/AllTransactionTable';

class TransactionPage extends Component{

  // Call the portfolio page here
  render(){
    return(
      <div>
        <AllTransactionTable/>
      </div>
    )
  } 
}

export default TransactionPage;