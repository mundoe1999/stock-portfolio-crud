import React, {Component} from 'react';
import {accountSignup} from '../../actions/accountaction';
import {Redirect} from 'react-router-dom';

class SignUpForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
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


    // Copies Object and erase uneccesary redirect state
    let account = this.state;
    delete account.redirect;

    // Calls SIGNUP API request
    let redirect = await accountSignup(account);

    console.log(redirect);
    this.setState({
      redirect: redirect
    });

  }


  render(){
    // If user is logged in, should just go to login page
    if(this.state.redirect) return (
      <Redirect to='/'/>
    )
    // Render Form
    return(
      <form onSubmit={this.handleSubmit} className='form'>
        <h2>Register</h2>
        <input
          onChange={this.handleChange} 
          type="text"
          name="name"
          placeholder="Enter Full Name"
          required
        />
        <br/>
        <input
          onChange={this.handleChange} 
          type="email"
          name="email"
          placeholder="example@email.com"
          required
        />
        <br/>
        <input
          onChange={this.handleChange} 
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <br/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default SignUpForm;