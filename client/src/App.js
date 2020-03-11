import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import * as pages from './components';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/' component={pages.HomePage}/>
        <Route exact path='/signup' component={pages.SignUpPage}/>
        <Route exact path='/portfolio' component={pages.PortfolioPage}/>
        <Route exact path='/transactions' component={pages.TransactionPage}/>


      </Switch>

    </Router>

  );
}

export default App;
