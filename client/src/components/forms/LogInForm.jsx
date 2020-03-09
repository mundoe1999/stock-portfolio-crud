import React, {Component} from 'react';
import {accountLogin} from '../../actions/accountaction'

class LogInForm extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
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
    accountLogin(this.state);
  }


  render(){
    // If user is logged in, should just go to portfolio page

    // Render Form
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>

        <input
          onChange={this.handleChange} 
          type="email"
          name="email"
          placeholder="example@email.com"
          required
        />

        <input
          onChange={this.handleChange} 
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default LogInForm;