import React, {Component} from 'react';
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
      balance: '',
      actualBalance: ''
    }
  }

  async componentDidMount() {

    await this.getTableItems();
  }

  // API Call Function
  getTableItems = async () => {
    // Loads all of User's Account Data
    let result = await groupTransactions();
    let balanceInfo =  await this.getBalance(result.transactions);

    // Sum all transactions 
      this.setState({
        list: result.transactions || [],
        balance: balanceInfo.balance,
        actualBalance: balanceInfo.actualBalance
      });
  }

  // Use to sum total Balance
  getBalance = async (transactions) => {
    let actualBalance = await getAccountBalance();
    let balance = actualBalance;
    transactions.forEach( (item) => balance +=item.totalAmount);
    return {
      balance: balance.toFixed(2),
      actualBalance: actualBalance.toFixed(2)
    };

  }
  // Call the portfolio page here
  render(){
    return(
      <div className="App-header">
        <NavBar/>
        <div>
          <h3>Balance: (${this.state.balance})</h3>
          <h3>Balance Without Stocks: (${this.state.actualBalance})</h3>
          <PortfolioTable list={this.state.list}/>
        </div>
        <TransactionForm refreshTable={this.getTableItems}/>
      </div>
    )
  } 
}

export default PortfolioPage;