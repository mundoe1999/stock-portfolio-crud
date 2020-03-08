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
        <Route exact path='/portfolio'/>
        <Route exact path='/transactions'/>
      </header>
    </div>


      </Switch>

    </Router>

  );
}

export default App;
