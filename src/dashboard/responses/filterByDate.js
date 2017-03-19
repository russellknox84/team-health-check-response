import React, { Component } from "react"

import "../../../sass/index.scss"

class FilterByDate extends Component {


    render(){
        return (
            <form onSubmit={this.props.filter} className="searchCriteria">
                <input type="text" />
                <input type="text" />
                <input type="submit" />
            </form>
        )
    }
}

export default FilterByDate