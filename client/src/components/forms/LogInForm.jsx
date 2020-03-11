import React, {Component} from 'react';
import {accountLogin} from '../../actions/accountaction';
import {Redirect} from 'react-router-dom';

class LogInForm extends Component {
  constructor(){
    super();
    this.state = {
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

    let account = this.state;
    delete account.redirect;

    // Calls LOGIN API request
    let redirect = await accountLogin(account);

    console.log(redirect);
    this.setState({
      redirect: redirect
    });
  }


  render(){
    // If user is logged in, should just go to portfolio page
    if(this.state.redirect) return (
      <Redirect to='/portfolio'/>
    )

    // Render Form
    return(
      <form onSubmit={this.handleSubmit} className='form'>
        <h2>Login</h2>

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

export default LogInForm;