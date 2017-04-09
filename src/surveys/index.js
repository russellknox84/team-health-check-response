import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { surveyList, activeProject } from "./selectors"
import { 
    addNewSurvey,
    setActiveSurvey,
    unsetActiveQuestion,
    unsetActiveSurvey
} from "./actions"

import SurveyList from "./components/surveyList"
import AddNewSurvey from "./components/addNewSurvey"

import "../../sass/index.scss"

class Survey extends Component {

    componentDidMount = () =>{
        this.props.unsetActiveSurvey();
        this.props.unsetActiveQuestion();
    }
    addSurvey = (e) => {
        e.preventDefault()
        const length = this.props.surveyList.length + 1
        const name = e.target.newProject.value
        const url = name.toLowerCase().replace(" ", "-")

        const surveyName = name
        const activeProjectId = this.props.activeProject
        const activeProject = this.props.activeProject

        axios.post("/api/project/createSurvey", { surveyName, activeProjectId })
            .then(survey => {
                     this.props.addNewSurvey({
                        id: length,
                        name, 
                        activeProject,
                        url
                     })
            })
            e.target.newProject.value = ""
    }

    render = () => {
        const { surveyList, match, setActiveSurvey } = this.props
        return (
            <div className="container">
                <div className="grid-row">
                    <SurveyList 
                        surveys={surveyList}
                        match={match}
                        setActiveSurvey={setActiveSurvey}
                    />
                    <AddNewSurvey addSurvey={this.addSurvey} />
                </div>    
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    surveyList: surveyList(state),
    activeProject: activeProject(state)
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
    addNewSurvey,
    setActiveSurvey,
    unsetActiveSurvey,
    unsetActiveQuestion
}, dispatch)
    
export default connect(mapStateToProps, mapDispatchToProps)(Survey)