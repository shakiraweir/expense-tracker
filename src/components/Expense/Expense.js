import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Expense.css'


class Expense extends Component {
    // The revenue page can show ALL current revenue entries AND also include a form to create a new entry. The new revenue will populate above the nav bar.
    constructor() {
        super()
        this.state = {
            expense: [ ]
        }
    }
<<<<<<< HEAD
            componentDidMount() {
                axios.get('https://fun-budget-tool.herokuapp.com/expense')
                    .then(res => {
                        // console.log(res.data)
                        this.setState({
                            expense: res.data
                        })
                    })

            }


    
    render() {
        // console.log(this.state.expense)
        const { expense } = this.state;
        const expenseList = 
            expense.map(exp => {
                return (
                    <div className='expenseRevenue' key={exp.id}>
                        <span className='expenseName'>{exp.name}</span>
                        <span className='expenseAmount'> ${exp.cost}</span>    
=======
    componentDidMount() {
        axios.get('https://fun-budget-tool.herokuapp.com/expense')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    expense: res.data
                })
            })
    }
    handleSubmit(event) {
        event.preventDefault()

    } 
    render() {
        // console.log(this.state.revenue)
        let expenseList = this.state.expense.map(exp => {
                return (
                    <div className='individualRevenue' key={exp.id}>
                        <span className='revenueName'>{exp.name}</span>
                        <span className='revenueAmount'> ${exp.amount}</span>    
>>>>>>> expenses
                    </div>
                )
        })
        return (
            <div>
                <div className="links">
                    <nav className="category">
                        <Link to="/"><h3>Back</h3>
                        </Link>
                        <Link to="/expense/create"><h3>Add Expense</h3>
                        </Link>
                    </nav>
<<<<<<< HEAD
                    <div className="create">
                        <h3 className="subtitle">New Expense</h3>
                        <form className="new-entry">
                            <textarea cols="25" rows="1" placeholder="Title"></textarea>
                            <textarea cols="25" rows="1" placeholder="$0.00"></textarea>
                        </form>
                        <div>
                            <button className="btn-add"> +</button>  
                        </div>
                        {expenseList}
=======
                    </div>
                <div>
                    {expenseList}
>>>>>>> expenses
                </div>
            </div>
        </div>
        );
    }
}

export default Expense;