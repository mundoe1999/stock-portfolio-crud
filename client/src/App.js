import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
      <header className="App-header">
        <Route exact path='/'/>
        <Route exact path='/signup'/>
        <Route exact path='/portfolio'/>
        <Route exact path='/transactions'/>
      </header>
    </div>


      </Switch>

    </Router>

  );
}

export default App;
