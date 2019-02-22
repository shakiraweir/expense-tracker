import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Expense.css'


class Expense extends Component {
    // The revenue page can show ALL current revenue entries AND also include a form to create a new entry. The new revenue will populate above the nav bar.
    constructor() {
        super()
        this.state = {
            expenses: [ ]
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('https://fun-budget-tool.herokuapp.com/expense')
            .then(res => {
                // console.log(res.data)
                this.setState({
                    expenses: res.data
                })
            })
    }
    handleSubmit(event) {
        event.preventDefault()
    } 

    handleDelete (event){
        event.preventDefault();
        axios
          .delete(`https://fun-budget-tool.herokuapp.com/expense/${this.state.expenses._id}`)
          .then(res => {
            console.log(res.data);
            this.setState({
              expenses: res.data
            });
            window.location.reload();
          })
          .catch(err => {
            console.log(err);
          });
      };
    
    render() {
        let expenseList = this.state.expenses.map(exp => {
                return (
                    <div className='individualEntry' key={exp._id}>

                        <Link to={'/expense/' + exp._id} className='revenueName'>  
                            <span>{exp.name}</span >
                        </Link> 
                        <span className='revenueAmount'>
                            ${exp.amount} 
                        </span>             
                    </div> 
                )
        })
        return (
            <div>
                <div className="links">
                    <nav className="category">
                        <Link to="/"><h3>Back</h3></Link>
                        
                        <Link to="/expense/create"><h3><span className="money-right">$</span> Add Expense</h3></Link>
                    </nav>
                </div>
                <div className="data">
                    <div className="dataEntries">
                    {expenseList}
                    </div>
                </div>
            </div>
       
        );
    }
}

export default Expense;