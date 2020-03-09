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
      <div className="App">
      <header className="App-header">
        <Route exact path='/' component={pages.HomePage}/>
        <Route exact path='/signup' component={pages.SignUpPage}/>
        <Route exact path='/portfolio' component={pages.PortfolioPage}/>
        <Route exact path='/transactions' component={pages.TransactionPage}/>
      </header>
    </div>


      </Switch>

    </Router>

  );
}

export default App;
