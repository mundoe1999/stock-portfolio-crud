import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import PortfolioTable from '../tables/PortfolioTable';
import NavBar from '../utils/NavBar';

class PortfolioPage extends Component{

  // Call the portfolio page here
  render(){
    return(
      <div className="App-header">
        <NavBar/>
        <PortfolioTable/>
      </div>
    )
  } 
}

export default PortfolioPage;