import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from '../Home/Home'
import Revenue from '../Revenue/Revenue'
import ShowRevenue from '../Revenue/ShowRevenue'
import Expense from '../Expense/Expense'
import ShowExpense from '../Expense/ShowExpense'
<<<<<<< HEAD
import CreateRevenue from '../Revenue/CreateRevenue'
=======
import CreateExpense from '../Expense/CreateExpense'
>>>>>>> expenses


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Expense Tracker</h1>
        </header>
        <Route path ="/" exact render={() => <Home />} /> 
        <Route path="/revenue" exact render={() => <Revenue /> } />
        <Route path="/revenue/show" exact render={() => <ShowRevenue /> } />
        <Route path="/expense" exact render={() => <Expense /> } />
        <Route path="/expense/show" exact render={() => <ShowExpense /> } />
<<<<<<< HEAD
        <Route path='/revenue/create' exact render={routerProps => <CreateRevenue {...routerProps} /> } />
=======
        <Route path="/expense/create" exact render={routerProps => <CreateExpense {...routerProps} /> } />
>>>>>>> expenses
      </div>
    );
  }
}

export default App;
