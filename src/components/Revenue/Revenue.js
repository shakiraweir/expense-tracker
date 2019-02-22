import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Revenue.css'



class Revenue extends Component {
    // The revenue page can show ALL current revenue entries AND also include a form to create a new entry. The new revenue will populate above the nav bar.
    constructor() {
        super()
        this.state = {
            revenues: [ ]
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
            componentDidMount() {
                axios.get('https://fun-budget-tool.herokuapp.com/revenue')
                    .then(res => {
                        // console.log(res.data)
                        this.setState({
                            revenues: res.data
                        })
                    })
                   

            }
            handleSubmit(event) {
                event.preventDefault()
            } 
           

            handleDelete (event){
                event.preventDefault();
                axios
                  .delete(`https://fun-budget-tool.herokuapp.com/expense/${this.state.expenses._id}`)
                  .then(res => {
                    console.log(res.data);
                    this.setState({
                      expenses: res.data
                    });
                    window.location.reload();
                  })
                  .catch(err => {
                    console.log(err);
                  });
              };

    render() {
        // console.log(this.state.revenue)
        // let revenueList = this.state.revenue.map(rev => {
        //         return (
        //             <div className='individualRevenue' key={rev.id}>
        //                 <span className='revenueName'>{rev.name}</span>
        //                 <span className='revenueAmount'> ${rev.amount}</span>    
        //             </div>
        //         )
        // })


        let revenueList = this.state.revenues.map(rev => {
            return (
                <div className='individualEntry' key={rev._id}>

                    <Link to={'/revenue/' + rev._id} className='revenueName'>  
                        <span>{rev.name}</span >
                    </Link> 
                    <span className='revenueAmount'>
                        ${rev.amount} 
                    </span>             
                </div> 
            )
    })
//         return (
//             <div>
//                 <div className="links">
//                     <nav className="category">
//                         <Link to="/"><h3>Back</h3>
//                         </Link>
//                         <Link to="/revenue/create"><h3>Add Revenue</h3>
//                         </Link>
//                     </nav>
//                 {/* <CreateRevenue /> */}
               
//             </div>
//             <div>
//                 {revenueList}
//             </div>
//         </div>
//         );
//     }
// }

return (
    <div>
        <div className="links">
            <nav className="category">
                <Link to="/"><h3>Back</h3></Link>
                <Link to="/revenue/create"><h3><span className="money-right">$</span> Add Revenue</h3></Link>
            </nav>
        </div>
        <div className="data">
            <div className="dataEntries">
            {revenueList}
            </div>
        </div>
    </div>

);
}
}

export default Revenue;