import React, { Component } from "react"
import axios from "axios"

import { connect } from "react-redux"

import UserResponses from "./userResponse"
import Filters from "./filters"
import { groupByQuestion, groupByResponse } from "./response_helpers"

import "../../../sass/index.scss"

class Responses extends Component {

    state = { 
        responses: [], 
        checked: 7,
        type: "responses"
    }

    outputResponse(data, type) {
        const outputType = type || this.state.type
        let types;
        if (outputType === "questions") {
            types = groupByQuestion(data)
             console.log(types)
        } 
        if (outputType === "responses") {
            types = groupByResponse(data)
            console.log(types)
        } 
        this.setState({ responses: types, initialData: data, type: outputType })
    }
    
    componentDidMount() {

     const { activeSurveyId } = this.props
     console.log(activeSurveyId, "active")
     axios.post("/health-check-response", { activeSurveyId })
        .then(response => {

        const { data } = response

        console.log("the data.....", data)
        console.log(data)
          this.outputResponse(data)
        })
    }

    filterByDate = (e) => {
        e.preventDefault()
        
        const fromDate = e.target[0].value
        const toDate = e.target[1].value

        axios.post("/health-check-response/filter-date", {
            fromDate,
            toDate
        })
        .then(resp => {
            const { data } = resp
            this.outputResponse(data)
        })
    }

    filterByDays = (e) => {
        e.preventDefault()

        const filterByDays = e.target.value
        const { activeSurveyId } = this.props
        this.setState({ checked: parseInt(filterByDays)})

        axios.post("/health-check-response/filter-days", { filterByDays,  activeSurveyId })
        .then(resp => {
            console.log(resp, "the response..")
            const { data } = resp
            this.outputResponse(data)
        })
    }

    displayType = (e) => {
        const input = e.target.value
        this.outputResponse(this.state.initialData, input)
    }

    render() {
        return (<div>
            <div className="container">
                <div className="grid-row">
                    <Filters {...this} />
                    <UserResponses responses={this.state.responses} type={this.state.type} />
                </div> 
            </div>
        </div>
        )
    }
   

}

const mapStateToProps = (state) => ({
    activeSurveyId: state.surveys.surveys[state.surveys.activeSurvey]._id,
})
export default connect(mapStateToProps)(Responses)