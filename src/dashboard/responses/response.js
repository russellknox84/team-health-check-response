import React, { Component } from "react"
import axios from "axios"

import UserResponses from "./userResponse"
import Filters from "./filters"

import "../../../sass/index.scss"

class Responses extends Component {

    state = { 
        responses: [], 
        checked: 7,
        type: 1
    }

    groupByQuestion(questions) {
        return questions.reduce((state, value) => {          
        const test = value.userResponse.map(a => {
            if (state[a.question]) {       
                return Object.assign(state, 
                    {[a.question]: [...state[a.question], {
                        question: a.question, 
                        userResponse: a.userResponse,
                        date: value.date
                    }]})                      
            }            
            return Object.assign(state, 
                {[a.question]: [{
                        question: a.question, 
                        userResponse: a.userResponse,
                        date: value.date
                    }]})  

        })
        return Object.assign(state)            
        }, {})
    }

    groupByResponse(data) {
        return data.reduce((state, acc) => {
            if (state[acc.date]) {  
              return Object.assign(state, {[acc.date]: [...state[acc.date],acc.userResponse]})    
            }
              return Object.assign(state, {[acc.date]: [acc.userResponse]})
        }, {})
    } 

    output(data, type) {
        const a = type || this.state.type
        let types;
        if (a === 0) {
            types = this.groupByQuestion(data)
        } 
        if (a === 1) {
            types = this.groupByResponse(data)
        } 
        this.setState({ responses: types, initialData: data, type: a })
    }
    
    componentDidMount() {
     axios.post("/health-check-response", {})
        .then(response => {
        const { data } = response
          this.output(data)
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
            this.output(data)
        })
    }

    filterByDays = (e) => {
        e.preventDefault()

        const filterByDays = e.target.value

        this.setState({ checked: parseInt(filterByDays)})

        axios.post("/health-check-response", { filterByDays })
        .then(resp => {
            const { data } = resp
            this.output(data)
        })
    }

    filterByType = (e) => {
        if(this.state.type === 0) {

        }
        if(this.state.type === 1) {

        }
    }

    type(input) {
        this.output(this.state.initialData, input)
    }

    render() {
        return (
        <div>
            <div className="container">
                <div className="grid-row">
                    <div className="column-full">
                        <h2 className="heading-medium">User Responses</h2>
                        <hr />
                    </div>
                </div>
                <div className="grid-row">
                    <Filters {...this} />
                    <UserResponses responses={this.state.responses} type={this.state.type} />
                </div> 
            </div>
        </div>
        )
    }
   

}
export default Responses