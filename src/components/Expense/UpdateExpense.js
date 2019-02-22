import React, { Component } from 'react';
import axios from 'axios'
import './Expense.css'

class UpdateExpense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses: {}
        }
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
   }

    componentDidMount() {
        console.log('https://fun-budget-tool.herokuapp.com/expense' + this.props.match.params.id)
        axios.get('https://fun-budget-tool.herokuapp.com/expense' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    expenses: res.data
                })
                console.log(this.state.expenses)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    onChange = (e) => {
        const state = this.state.expenses
        state[e.target.name] = e.target.value;
        this.setState({ expenses: state });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, amount } = this.state.expense
        axios.put('https://fun-budget-tool.herokuapp.com/expense' + this.props.match.params.id, { name, amount })
            .then((res) => {
                console.log(res)
                this.props.history.push('/expense' + this.props.match.params.id)
            });
    }

    render() {
        const { name, amount } = this.state.expenses
        return (
          <div className="data">
          <div className="create">
              <h3 className="subtitle">New Expense</h3>
              <form className="new-entry" onSubmit={this.handleSubmit}>

                  <textarea cols="25" rows="1" name="name" placeholder="Title" onChange={this.handleChange} value={name}></textarea>

                  <textarea cols="25" rows="1" name="amount" placeholder="$0.00"
                  onChange={this.handleChange} value={amount}></textarea>

                  <button  type="submit" className="btn-add">+</button> 
              </form>
          </div>
      </div>
        );
    }
}

export default UpdateExpense;