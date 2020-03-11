import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import PortfolioTable from '../tables/PortfolioTable';
import TransactionForm from '../forms/TransactionForm';
import NavBar from '../utils/NavBar';

import {groupTransactions} from '../../actions/stockation';
import {getAccountBalance} from '../../actions/accountaction';


class PortfolioPage extends Component{
  constructor(){
    super();
    this.state = {
      list: [],
      balance: ''
    }
  }

  async componentDidMount() {

    await this.getTableItems();
  }

  getTableItems = async () => {
    // Loads all of User's Account Data
    let result = await groupTransactions();

    // Sum all transactions 
      this.setState({
        list: result.transactions || [],
        balance: await this.getBalance(result.transactions)
      });
  }

  // Use to sum total Balance
  getBalance = async (transactions) => {
    let balance = await getAccountBalance();
    transactions.forEach( (item) => balance +=item.totalAmount);
    return balance.toFixed(2);

  }
  // Call the portfolio page here
  render(){
    return(
      <div className="App-header">
        <NavBar/>
        <div>
        <h3>Balance: (${this.state.balance})</h3>
        <PortfolioTable list={this.state.list}/>
        </div>
        <TransactionForm refreshTable={this.getTableItems}/>
      </div>
    )
  } 
}

export default PortfolioPage;