import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';

class NavBar extends Component {
  logout = () => {
    Cookies.remove('user-data');
  }
  render(){
    return (
      <nav>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/transactions'>Transaction</Link>
        <Link to='/' onClick={this.logout}>Logout</Link>
      </nav>
    )
  }
}
export default NavBar;