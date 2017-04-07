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
        axios.get("/api/questions")
            .then(response => console.log(response))
        this.props.unsetActiveSurvey();
        this.props.unsetActiveQuestion();

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
        const activeProjectId = this.props.activeProject
        const activeProject = this.props.activeProject

        axios.post("/api/project/createSurvey", { surveyName, activeProjectId })
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
                <div className="column-one-quarter border-right overflow-auto">
                    <h2 className="heading-small heading-contents">Current Surveys</h2>
                    {console.log(this.props.surveys, this.props.state, "the surveys")}
                    {this.props.surveys.map(survey => 
                        <div>
                            <Link role="button" className="tab" to={`${this.props.match.url}/${survey}`} onClick={() => this.props.setActiveSurvey(survey)}>{survey}</Link>
                        </div>
                    )}
                </div>
                <div className="column-three-quarter">
                    <h2 className="heading-small heading-contents">Add new survey</h2>
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
    projects: state.project.projects,
    state: state,
})
const mapDispatchToProps = (action) => ({
    addSurvey: (input) => {
        action({type: "ADD_SURVEY", payload: input})
    },
    setActiveSurvey: (surveyName) => action({type: "SET_ACTIVE_SURVEY", surveyName}),
    unsetActiveSurvey: () => action({type: "UNSET_ACTIVE_SURVEY"}),
    unsetActiveQuestion: () => action({type: "UNSET_ACTIVE_QUESTION"})
})
    
export default connect(mapStateToProps, mapDispatchToProps)(Test)