import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import AllTransactionTable from '../tables/AllTransactionTable';

class PortfolioPage extends Component{
  render(){
    return(
      <div>
        <AllTransactionTable/>
      </div>
    )
  } 
}

export default PortfolioPage;