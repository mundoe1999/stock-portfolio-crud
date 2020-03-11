import React, {Component} from 'react';
import LogInForm from '../forms/LogInForm';
import {Link} from 'react-router-dom'


class HomePage extends Component {

  render(){
    return (
      <div className="App-header">
        <div className="flex-container">
        <LogInForm/>
        <p>Don't have an account? <Link to='/signup'>Click Here!</Link></p>

        </div>
      </div>
    )
  }
}

export default HomePage;