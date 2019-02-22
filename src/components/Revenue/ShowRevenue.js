import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ShowRevenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revenues: [],
      id: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://fun-budget-tool.herokuapp.com/revenue/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          revenues: res.data,
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

    axios.delete(`https://fun-budget-tool.herokuapp.com/revenue/${this.state.revenues._id}`) 
    .then(res => {
        console.log(res.data);
        this.setState({
          revenue: []
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
    console.log(this.state.revenues)
    let oneRevenue = this.state.revenues.map(rev => {
        return (
        <div className='individualEntry' key={rev._id}>  
                <span className='revenueName'>{rev.name}</span>      
                <span className='revenueAmount'>
                          ${rev.amount} 
                             </span>             
                </div>    
        )
    })
    return (
        <div>
            <div className="links">
            <nav className="category">
                <Link to="/revenue"><h3>Back</h3></Link>
                <Link to="/"><h3> Home</h3></Link>
            </nav>
            </div>
            {oneRevenue}
            {/* <div className='individualEntry' key={this.state.rev._id}>  
                <span className='revenueName'>{this.state.rev.name}</span>      
                <span className='revenueAmount'>
                          ${this.state.rev.amount} 
                             </span>             
                </div>              */}

            {/* <div key={this.state.expenses.name}> */}

                  <Link to={`/revenue/edit/${this.state.revenues._id}`}>
                  <button value="update" type="submit">
                  Edit
                  </button>
                  </Link>
      
      
                  <Link to="/">
                  <button value="delete" type="submit" onClick={this.handleDelete}>
                  Delete
                  </button>
                  </Link>
        
            {/* </div>  */}
      </div>
    );
  }
}
export default ShowRevenue;