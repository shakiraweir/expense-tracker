import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ShowExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: {},
      id: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://fun-budget-tool.herokuapp.com/expense" + this.props.match.params.id)
      .then(res => {
        this.setState({
          expenses: res.data,
          id: res.data._id
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete(event) {
    event.preventDefault();

    axios
      .delete(`https://fun-budget-tool.herokuapp.com/expense/${this.state.expenses._id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          expense: {}
        });
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
        <div>
            <div className="links">
            <nav className="category">
                <Link to="/"><h3>Back</h3></Link>
                <Link to="/expense/create"><h3> Home</h3></Link>
            </nav>
            </div>

            <div key={this.state.expenses.name}>
            <Link to={`/expense/edit/${this.state.expenses._id}`}>

            <button value="update" type="submit">
            Update
            </button>
             </Link>
            <Link to="/expense">
            <button value="delete" type="submit" onClick={this.handleDelete}>
            Delete
            </button>
        </Link>
        
      </div>
      </div>
    );
  }
}
export default ShowExpense;