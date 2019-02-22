import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios'
import './Revenue.css'

class UpdateRevenue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            revenues: {
                name: '',
                amount:''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
   }

    componentDidMount() {
        console.log('https://fun-budget-tool.herokuapp.com/revenue' + this.props.match.params.id)
        axios.get('https://fun-budget-tool.herokuapp.com/revenue/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    revenues: res.data
                })
                console.log(this.state.revenues)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleChange(event) {
        console.log(event.target.value)
        const state = this.state.revenues
        state[event.target.name] = event.target.value;
        this.setState({ revenues: state });
    }
    // handleChange(event) {
    //     // event.target.value
    //     this.setState(
    //         {  [event.target.name]: event.target.value }
    //     )
    // }

    handleSubmit(event){
        console.log("namelogggg")
        event.preventDefault();
        // const { name, amount } = this.state
        axios.put('https://fun-budget-tool.herokuapp.com/revenue/' + this.props.match.params.id, {
            name: this.state.revenues.name,
            amount: this.state.revenues.amount
        })
            .then((res) => {
                console.log(res)
                this.props.history.push('/revenue/' + this.props.match.params.id)
            });
    }

    render() {
        const { name, amount } = this.state.revenues
        return (
          <div className="data">
          <div className="create">
              <h3 className="subtitle">New Revenue</h3>
              <form className="new-entry" onSubmit={this.handleSubmit}>

                  <textarea cols="25" rows="1" name="name" placeholder="Title" onChange={this.handleChange} value={name}></textarea>

                  <textarea cols="25" rows="1" name="amount" placeholder="$0.00"
                  onChange={this.handleChange} value={amount}></textarea>
                  <button  type="submit" className="btn-add"> update </button>
              </form>
          </div>
      </div>
        );
    }
}

export default UpdateRevenue;