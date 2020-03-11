import React, {Component} from 'react';
import SignUpForm from '../forms/SignUpForm';


class SignUpPage extends Component {

  render(){
    return (
      <div className="App-header">
        <div className="flex-container">
          <SignUpForm/>
        </div>
      </div>
    )
  }
}

export default SignUpPage;