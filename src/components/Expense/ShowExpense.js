import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ShowExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      id: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://fun-budget-tool.herokuapp.com/expense/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          expenses: res.data,
          id: res.data._id
        });
        console.log(res.data)
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
          expense: []
        });
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      })
      // .then(() => {
      //    <Redirect to='/expense' />
      // })
  } 

  render() {
    // let expenseList = this.state.expenses.map(exp => {
//       return (
//           <div className='individualEntry' key={exp._id}>

//               {/* <Link to={'/expense/' + exp._id} className='revenueName'>   */}
//                   <span>{this.state.expense.name}</span >
//               {/* </Link>  */}
//               <span className='revenueAmount'>
//                   ${this.state.expenses.amount} 
//               </span>             
//           </div> 
//       )
// })
    return (
        <div>
            <div className="links">
            <nav className="category">
                <Link to="/expense"><h3>Back</h3></Link>
                <Link to="/"><h3> Home</h3></Link>
            </nav>
            </div>

            <div className='individualEntry' key={this.state.expenses._id}>  
                <span className='revenueName'>{this.state.expenses.name}</span >      
                <span className='revenueAmount'>
                          ${this.state.expenses.amount} 
                             </span>             
                </div>             

            {/* <div key={this.state.expenses.name}> */}

                  <Link to={`/expense/edit/${this.state.expenses._id}`}>
                  <button value="update" type="submit">
                  Edit
                  </button>
                  </Link>
      
      
                  <Link to="/expense">
                  <button value="delete" type="submit" onClick={this.handleDelete}>
                  Delete
                  </button>
                  </Link>
        
            {/* </div>  */}
      </div>
    );
  }
}
export default ShowExpense;