import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

// The home page can show ALL expense and revenue entries. Expenses in red and revenue in green. The expense and revenue entries will populate above the nav bar.

class Home extends Component {
    render() {
        return (
            <div>
                <div className="links">
                    <nav className="category">
                        <Link to="/revenue"><h3><span className="money-left">$</span>  Revenue</h3>
                        </Link>
                        <Link to="/expense"><h3><span className="money-right">$</span>  Expense</h3>
                        </Link>
                    </nav>
                    <footer className="total">
	                    <div className="btn">
	                        <button className="btn-left">Revenue</button>
	                        <button className="btn-right">Expense</button>
	                    </div>
	                    <p>Current Balance</p>
	                </footer>
                </div>
            </div>
        );
    }
}

export default Home;