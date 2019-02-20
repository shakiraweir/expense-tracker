import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Revenue extends Component {
    // The revenue page can show ALL current revenue entries AND also include a form to create a new entry. The new revenue will populate above the nav bar.
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
                        <h3 className="subtitle">New Revenue</h3>
                        <form className="new-entry">
                            <textarea cols="25" rows="1" placeholder="Title"></textarea>
                            <textarea cols="25" rows="1" placeholder="$0.00"></textarea>
                        </form>
                        <div>
                            <button className="btn-add"> +</button>  
                        </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Revenue;