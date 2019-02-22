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
                    </div>
                <div>
                    {expenseList}
                </div>
            </div>
       
        );
    }
}

export default Expense;