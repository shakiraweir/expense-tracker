import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div className="links">
                <Link to="/revenue"><button>$ In</button></Link>
                <Link to="/expense"><button>$ Out</button></Link>
                <p>Total: ________</p>
            </div>
        );
    }
}

export default Home;