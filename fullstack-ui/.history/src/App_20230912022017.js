// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
imp
import Flowers from './components/Flowers';
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
            <Route path="/" exact component={Home} />
            <Route path="/flowers" component={Flowers} />
            {/* Define more routes as needed */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
