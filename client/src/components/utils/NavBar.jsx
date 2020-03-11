import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render(){
    return (
      <nav>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/transactions'>Transaction</Link>
        <Link to='/logout'>Logout</Link>
      </nav>
    )
  }
}
export default NavBar;