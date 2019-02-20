import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Revenue extends Component {
    render() {
        return (
            <div>
                <button>$ Out</button>
                <div className="links">
                    <Link to="/"><button>Back</button></Link> 
                    <Link to="/expense/create"><button>Add new expense</button></Link>
                </div>
            </div> 
        );
    }
}

export default Revenue;