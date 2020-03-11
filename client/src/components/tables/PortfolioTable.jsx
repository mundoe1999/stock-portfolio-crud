import React, {Component} from 'react';

class PortfolioTable extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
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
          {this.props.list.map((item, key) => (
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