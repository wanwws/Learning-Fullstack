// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'
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
          <Routes>
            <Route path="/" exact component={<LoginPage/>} />
            <Route path="/flowers" component={<RegisterPage/>} />
            {/* Define more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
