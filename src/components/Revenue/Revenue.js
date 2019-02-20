import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Revenue extends Component {
    render() {
        return (
            <div className="links">
                <Link to="/expense"><button>$ In</button></Link>
                <div>
                    <Link to="/"><button>Back</button></Link> 
                    <Link to="/revenue/create"><button>Add new revenue</button></Link>
                </div>
            </div> 
        );
    }
}

export default Revenue;