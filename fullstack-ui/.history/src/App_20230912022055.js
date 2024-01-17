// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Register from './'
import Management from './components/Management';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Flower Marketplace</h1>
          <Management />
        </header>
        <div className="App-content">
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/flowers" component={Flowers} />
            {/* Define more routes as needed */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
