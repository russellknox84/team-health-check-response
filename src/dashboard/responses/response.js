import React, { Component } from "react"
import axios from "axios"
import UserResponses from "./user-responses"
import DownloadCSV from "./downloadCSV"
import FilterByDate from "./filterByDate"
import FilterByDays from "./filterByDays"

import "../../../sass/index.scss"

class Responses extends Component {
    state = { responses: [] }
    
    componentDidMount() {
        axios.post("/health-check-response", {

        })
            .then(response => {
                const { data } = response
                console.log(data)
                this.setState({ responses: data })
            })
    }

    filterByDate(e){
        e.preventDefault()
        
        const fromDate = e.target[0].value
        const toDate = e.target[1].value

        axios.post("/health-check-response/filter-by-date", {
            fromDate,
            toDate
        })
        .then(resp => {
            const { data } = resp
            this.setState({ responses: data })
        })
    }

    filterByDays(e){
        e.preventDefault()
 
        const filterByDays = e.target.value

        axios.post("/health-check-response", {
            filterByDays
        })
        .then(resp => {
            const { data } = resp
            console.log(data)
            this.setState({ responses: data })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="grid-row">
                        <div className="column-full">
                            <h2 className="heading-medium">User Responses</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="column-quarter">
                            <FilterByDays filter={this.filterByDays.bind(this)} />
                            <FilterByDate filter={this.filterByDate.bind(this)} />
                            <DownloadCSV input={this.state.responses} />
                        </div>
                       
            
                     <div className="column-three-quarter">
                        {this.state.responses.map( resp => 
                            <table className="user-response">
                                <caption>Submitted - {resp.date}</caption>
                                <thead>
                                    <tr>
                                        <th>Question</th>
                                        <th>Response</th>
                                    </tr>
                                </thead>
                                <UserResponses questions={resp.userResponse} />
                            </table>            
                        )}
                    </div> 
                </div> 
            </div>
        </div>
        )
    }
   

}
export default Responses