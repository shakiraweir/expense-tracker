import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div>
                <div className="links">
                    <nav className="category">
                        <Link to="/revenue"><h3>Income</h3>
                        </Link>
                        <Link to="/expense"><h3>Expense</h3>
                        </Link>
                    </nav>
                    <footer className="total">
                        <div className="btn">
                            <button className="btn-left">Income</button>
                            <button className="btn-right">Expense</button>
                        </div>
                        <h3>Balance</h3>
                    </footer>
                </div>
               <p>Total: ________</p>
            </div>
            
        );
    }
}

export default Home;