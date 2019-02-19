import React, { Component } from 'react';
import './App.css';
// import { Link } from "react-router-dom"
import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Expense Tracker</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
