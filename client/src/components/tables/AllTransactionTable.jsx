import React, {Component} from 'react';

class AllTransactionTable extends Component {

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
          {this.props.transactions.map((item, key) => (
            <tr key={key}>
              <td>{new Date(item.createdAt).toDateString()}</td>
              <td>{item.symbol}</td>
              <td>{item.price_bought.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>{(item.quantity*item.price_bought).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default AllTransactionTable;