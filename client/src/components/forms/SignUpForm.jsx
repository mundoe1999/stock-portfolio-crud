import React, {Component} from 'react';
import {accountSignup} from '../../actions/accountaction'

class SignUpForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
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

    // Calls SIGNUP API request
    accountSignup(this.state);

  }


  render(){
    // If user is logged in, should just go to portfolio page

    // Render Form
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Register</h2>
        <input
          onChange={this.handleChange} 
          type="text"
          name="name"
          placeholder="Enter Full Name"
          required
        />

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

export default SignUpForm;