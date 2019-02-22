import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from '../Home/Home'
import Revenue from '../Revenue/Revenue'
import CreateRevenue from '../Revenue/CreateRevenue'
import ShowRevenue from '../Revenue/ShowRevenue'
import Expense from '../Expense/Expense'
<<<<<<< HEAD
import CreateExpense from '../Expense/CreateExpense'
import ShowExpense from '../Expense/ShowExpense'
=======
import UpdateExpense from '../Expense/UpdateExpense'
import ShowExpense from '../Expense/ShowExpense'
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
        <Route path="/revenue/create" exact render={routerProps => <CreateRevenue {...routerProps} /> } />
        <Route path="/revenue/show" exact render={() => <ShowRevenue /> } />

        <Route path="/expense" exact render={() => <Expense /> } />
        <Route path="/expense/create" exact render={routerProps => <CreateExpense {...routerProps} /> } />
<<<<<<< HEAD
        <Route path="/expense/show" exact render={() => <ShowExpense /> } />
=======
        <Route path="/expense/:id" exact render={(routerProps) => <ShowExpense {...routerProps}/> } />
        <Route path="/expense/edit/:id" exact render={(routerProps) => <UpdateExpense {...routerProps}/> } />
>>>>>>> expenses
      </div>
    )
  }
}

export default App;
