import React, {Component} from 'react';
import {groupTransactions} from '../../actions/stockation';

class PortfolioTable extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
  }
  
  async componentDidMount(){
    // Loads all of User's Account Data
    let result = await groupTransactions();
      this.setState({
        list: result.transactions || []
      })
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Ticker Symbol</th>
            <th>Stocks Owned</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.state.list.map((item, key) => (
            <tr key={key} style={{color: item.color}}>
              <td>{item._id}</td>
              <td>{item.totalStocks}</td>
              <td>{item.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default PortfolioTable;