import React, { Component } from 'react';
import '../Expense/Expense.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

class CreateExpense extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            amount: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        // event.target.value
        this.setState(
            {  [event.target.name]: event.target.value }
        )
    }
    handleSubmit(event) {
        event.preventDefault()
        axios.post('https://fun-budget-tool.herokuapp.com/expense', this.state)
        .then(result => {
            console.log(result)
            this.props.history.push('/expense')
        })
    }
 
                    // console.log('test submitted')
                    // this.setState({ name: 'whatever'})
                    // this.setState((oldState) => {
                    //     return oldState.expense.push({name: this.state.name , amount: this.state.amount})
                    // })
 
                    // make axios call
                    // axios.post('https://fun-budget-tool.herokuapp.com/expense', {
                    //     data: {
                    //         amount: this.state.amount,
                    //         name: this.state.name
                    //     }
                    // })
                    // .then((result) => {
                    //     console.log(result)
                    //     // setstate again
                    //     // add name and amount to this.state.expense
                    //     this.setState({
                    //         name: this.state.name , amount: this.state.amount
                    //     })
                    // })
    //     })
    // }
    render() {
        return (
            <div>
                <div className="links">
                    <nav className="category">
                        <Link to="/expense"><h3>Back</h3></Link>
                        <Link to="/"><h3>Home</h3></Link>
                    </nav>
                </div>
                <div className="data">
                    <div className="create">
                        <h3 className="subtitle">New Expense</h3>
                        <form className="new-entry" onSubmit={this.handleSubmit}>
                            <textarea cols="25" rows="1" name="name" placeholder="Title" onChange={this.handleChange} value={this.state.name}></textarea>
                            <textarea cols="25" rows="1" name="amount" placeholder="$0.00"

                            onChange={this.handleChange} value={this.state.amount}></textarea>
                            <button  type="submit" className="btn-add">+</button> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CreateExpense;