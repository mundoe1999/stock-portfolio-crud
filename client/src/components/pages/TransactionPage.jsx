import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import AllTransactionTable from '../tables/AllTransactionTable';
import NavBar from '../utils/NavBar';

import {getTransactions} from '../../actions/stockation';


class TransactionPage extends Component{
  constructor(){
    super();
    this.state = {
      list: []
    }
  }

  async componentDidMount(){
    let result = await getTransactions();
    this.setState({
      list: result.transactions || []
    })
  }


  // Call the portfolio page here
  render(){
    return(
      <div className="App-header">
        <NavBar/>
        <AllTransactionTable transactions={this.state.list}/>

    
      </div>
    )
  } 
}

export default TransactionPage;