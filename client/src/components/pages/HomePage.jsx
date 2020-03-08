import React, {Component} from 'react';
import LogInForm from '../forms/LogInForm';
import {Link} from 'react-router-dom'


class HomePage extends Component {

  render(){
    return (
      <div>
        <LogInForm/>
        Don't have an account? <Link to='/signup'>Click Here!</Link>
      </div>
    )
  }
}

export default HomePage;