import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import PortfolioTable from '../tables/PortfolioTable';

class PortfolioPage extends Component{

  // Call the portfolio page here
  render(){
    return(
      <div>
        <PortfolioTable/>
      </div>
    )
  } 
}

export default PortfolioPage;