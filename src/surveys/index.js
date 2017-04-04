import React, { Component } from "react"
import axios from "axios"
import { Link, Route } from "react-router-dom"
import { connect } from "react-redux"

import "../../sass/index.scss"

class Test extends Component {

    state = { 
        checks: [1,2,3,4],
        projects: [],
        questions: [] 
    }

    componentDidMount = () =>{
        console.log(this.props.state, "props state cdm")
        axios.get("/questions")
            .then(response => console.log(response))
    }

    deleteId = (id) => {
        const newId = this.state.questions.filter(qId => {
            if (qId._id === id) return
            return qId
        })
        this.setState({ questions: newId })
    }

    addOne = (e) => {
        e.preventDefault()

        const length = this.state.questions.length

        const question = e.target.question.value
        const type = e.target.type.value
        const validation = e.target.validation.checked
    }

    addSurvey = (e) => {
        e.preventDefault()
        const length = this.props.surveys.length + 1
        const name = e.target.newProject.value
        const url = name.toLowerCase().replace(" ", "-")

        const surveyName = name
        const activeProject = this.props.activeProject

        axios.post("/api/project/createsurvey", { surveyName })
            .then(survey => {
                     this.props.addSurvey({
                        id: length,
                        name, 
                        activeProject,
                        url
                     })

            })
            e.target.newProject.value = ""
   

    }

    render = () => 
        <div className="container">
            <div className="grid-row">
                <div className="column-one-quarter">
                    <h2 className="heading-small heading-contents">Current Surveys:</h2>
                    {console.log(this.props.surveys, this.props.state, "the surveys")}
                    {this.props.surveys.map(survey => 
                        <ul className="list list-contents" onClick={() => this.props.setActiveSurvey(survey)}>
                            <li><Link to={`${this.props.match.url}/${survey}`}>{survey}</Link></li>
                        </ul>
                    )}
                </div>
                <div className="column-three-quarter">
                    <h2 className="heading-small heading-contents">Add new survey:</h2>
                    <form onSubmit={this.addSurvey}>
                        <div className="form-group">
                            <input className="form-control" type="text" name="newProject" id="newProject" autoComplete="off" />
                        </div>
                        <div>
                        <input className="button submit-response" type="submit" value="Add Project" />
                        </div>
                    </form>
                </div>
            </div>    
        </div>
}

const mapStateToProps = (state) => ({
    surveys: state.project.projects[state.project.activeProject].surveysId,
    activeProject: state.project.activeProject,
    state: state,
})
const mapDispatchToProps = (action) => ({
    addSurvey: (input) => {
        action({type: "ADD_SURVEY", payload: input})
    },
    setActiveSurvey: (surveyName) => action({type: "SET_ACTIVE_SURVEY", surveyName})

})
    
export default connect(mapStateToProps, mapDispatchToProps)(Test)