import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import CreateRevenue from './CreateRevenue'


class Revenue extends Component {
    // The revenue page can show ALL current revenue entries AND also include a form to create a new entry. The new revenue will populate above the nav bar.
    constructor() {
        super()
        this.state = {
            revenue: [ ]
        }
    }
            componentDidMount() {
                axios.get('https://fun-budget-tool.herokuapp.com/revenue')
                    .then(res => {
                        // console.log(res.data)
                        this.setState({
                            revenue: res.data
                        })
                    })

            }

            handleSubmit(event) {
                event.preventDefault()

            }
    
    render() {
        // console.log(this.state.revenue)
        const { revenue } = this.state;
        const revenueList = 
            revenue.map(rev => {
                return (
                    <div className='individualRevenue' key={rev.id}>
                        <span className='revenueName'>{rev.name}</span>
                        <span className='revenueAmount'> ${rev.amount}</span>    
                    </div>
                )
        })
        return (
            <div>
                <div className="links">
                    <nav className="category">
                        <Link to="/"><h3>Back</h3>
                        </Link>
                        <Link to="/"><h3>Add Revenue</h3>
                        </Link>
                    </nav>
                {/* <CreateRevenue /> */}
                {revenueList}
            </div>
        </div>
        );
    }
}

export default Revenue;