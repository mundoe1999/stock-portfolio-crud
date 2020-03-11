import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import AllTransactionTable from '../tables/AllTransactionTable';
import NavBar from '../utils/NavBar';
import TransactionForm from '../forms/TransactionForm';
import {getTransactions} from '../../actions/stockation';


class TransactionPage extends Component{
  constructor(){
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    this.getTableItems();
  }

  getTableItems = async () => {
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
        <TransactionForm refreshTable={this.getTableItems}/>
    
      </div>
    )
  } 
}

export default TransactionPage;