import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Expense.css'
// The expense page can show ALL current expense entries AND also include a form to create a new entry. The new expense will populate above the nav bar.

class Expense extends Component {
    render() {
        return (
            <div>
                <div className="links">
                    <nav className="category">
                        <Link to="/"><h3>Back</h3>
                        </Link>
                        <Link to="/"><h3>Logout</h3>
                        </Link>
                    </nav>
                     <div className="create">
                        <h3 className="subtitle">New Expense</h3>
                        <form className="new-entry">
                            <textarea cols="25" rows="1" placeholder="Title"></textarea>
                            <textarea cols="25" rows="1" placeholder="$0.00"></textarea>
                        </form>
                        <div>
                            <button className="btn-add"> +</button>  
                        </div>
                        {/* <div>
                            <button className="btn-update">update</button> 
                            <button className="btn-delete"> delete</button>  
                        </div> */}
                        
                    </div>
{/*                      
                    <footer className="total">
	                    <div className="btn">
	                        <button className="btn-left">Income</button>
	                        <button className="btn-right">Expense</button>
	                    </div>
	                    <p>Current Balance</p>
	                </footer> */}
                </div>
            </div>
        );
    }
}

export default Expense;