import React, { Component } from "react"

import "../../../../sass/index.scss"

class FilterByDate extends Component {


    render(){
        return (
            <form onSubmit={this.props.filter} className="searchCriteria">
                <div className="form-group">
                    <div>
                        <label className="form-label" htmlFor="from-date">From</label>
                         <input className="form-control" id="from-date" type="text" placeholder="DD-MM-YYYY" /> 
                    </div>    
                     <div>
                        <label className="form-label" htmlFor="to-date">To</label>
                        <input className="form-control" id="to-date" type="text" placeholder="DD-MM-YYYY" /> 
                    </div>                
                 </div>
                <input type="submit" />
            </form>
        )
    }
}

export default FilterByDate