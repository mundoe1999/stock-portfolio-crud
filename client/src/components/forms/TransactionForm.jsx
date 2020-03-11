import React, {Component} from 'react';
import {addTransaction} from '../../actions/stockation'

class TransactionForm extends Component {
  constructor(){
    super();
    this.state = {
      symbol: '',
      quantity: '',
      redirect: false
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  
  handleSubmit = async (e) => {
    e.preventDefault();

    console.log(this.state);


    // Calls LOGIN API request
    let redirect = await addTransaction(this.state);

    console.log(redirect);

    // If transaction was successful, refresh transactions
    if(redirect){
      this.props.refreshTable();
    }

  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Add Ticker</h2>

        <input
          onChange={this.handleChange} 
          type="text"
          name="symbol"
          placeholder="Ticker"
          required
        />
        <br/>
        <input
          onChange={this.handleChange} 
          type="number"
          name="quantity"
          placeholder="Quantity"
          min='1'
          step='1'
          required
        />
        <button type='submit'>Buy</button>
      </form>
    )
  }
}

export default TransactionForm;