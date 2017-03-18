import React, { Component } from "react"
import axios from "axios"
import UserResponses from "./user-responses"
import DownloadCSV from "./downlaod-csv"
import FilterButton from "./filter-button"

import "../../sass/index.scss"

class Response extends Component {
    state = { responses: [] }
    
    componentDidMount() {
        axios.get("/health-check-response")
            .then(response => {
                const { data } = response
                console.log(data)
                this.setState({ responses: data })
            })
    }

    updateReponses(e){
        e.preventDefault()
        
        const fromDate = e.target[0].value
        const toDate = e.target[1].value

        axios.post("/health-check-response/filter-data", {
            fromDate,
            toDate
        })
        .then(resp => {
            const { data } = resp
            console.log(resp)
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
                            <FilterButton filter={this.updateReponses.bind(this)} />
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
export default Response