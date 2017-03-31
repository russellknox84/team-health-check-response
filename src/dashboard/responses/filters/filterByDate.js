import React, { Component } from "react"

import "../../../../sass/index.scss"

class FilterByDate extends Component {


    render(){
        return (
            <form onSubmit={this.props.filter} className="searchCriteria">
                <fieldset>
                    <div className="form-group">
                        <div className="inline spacing">
                            <label className="form-label" htmlFor="from-date">Start date</label>
                            <input className="form-control" id="from-date" type="text" placeholder="DD-MM-YYYY" /> 
                        </div>    
                        <div className="inline">
                            <label className="form-label" htmlFor="to-date">End date</label>
                            <input className="form-control" id="to-date" type="text" placeholder="DD-MM-YYYY" /> 
                        </div>
                    </div>
                    <div className="form-group">                
                        <input className="button" type="submit" value="Filter" />
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default FilterByDate