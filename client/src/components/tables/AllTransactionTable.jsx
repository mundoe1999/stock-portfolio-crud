import React, {Component} from 'react';
import {getTransactions} from '../../actions/stockation';

class AllTransactionTable extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
  }
  
  async componentDidMount(){
    // Loads all of User's Account Data
    let result = await getTransactions();
      this.setState({
        list: result.transactions || []
      })
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Bought At</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.state.list.map((item) => (
            <tr>
              <td>{item.createdAt}</td>
              <td>{item.symbol}</td>
              <td>{item.price_bought}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity*item.price_bought}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default AllTransactionTable;