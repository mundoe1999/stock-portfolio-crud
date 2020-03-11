import React, {Component} from 'react';
import {addTransaction} from '../../actions/stockation'

class TransactionForm extends Component {
  constructor(){
    super();
    this.state = {
      symbol: '',
      quantity: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);


    // Calls LOGIN API request
    addTransaction(this.state);
  }


  render(){
    // If user is logged in, should just go to portfolio page

    // Render Form
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>

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