import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import uuid from "uuid"

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
        console.log(this.props.state)
        this.props.unsetActiveSurvey();
        this.props.unsetActiveQuestion();
    }
    addSurvey = (e) => {
        e.preventDefault()

        const {
            activeProject,
            addNewSurvey
        } = this.props

        const surveyName = e.target.newProject.value
        const url = name.toLowerCase().replace(" ", "-")
        const id = uuid.v4()
        const survey = {
            _id: id,
            id,
            surveyName,
            url,
            activeProject,
            published: false,
            draft: true
        }

        axios.post("/api/project/createSurvey", { survey })
            .then(surveys => {

                addNewSurvey(survey)
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
    activeProject: activeProject(state),
    state: state
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
    addNewSurvey,
    setActiveSurvey,
    unsetActiveSurvey,
    unsetActiveQuestion
}, dispatch)
    
export default connect(mapStateToProps, mapDispatchToProps)(Survey)