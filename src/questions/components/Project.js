import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import uuid from "uuid"
import axios from "axios"

import * as selectors from "../selectors"
import * as actions from "../actions"

import ProjectOverview from "./projectOverview"
import AddNewQuestion from "./addNewQuestion"

import "../../../sass/index.scss"

class Project extends Component {

    addQuestion = (value) => {
        const {
            addQuestion,
            activeSurvey
        } = this.props
        
        const values = [
                {id: 1, value: 1},
                {id: 2, value: 2},
                {id: 3, value: 3},
                {id: 4, value: 4},
                {id: 5, value: 5}
            ]


        addQuestion(activeSurvey, {   
            id: `id${uuid.v4()}`,
            question: value.question,
            validation: value.validation,
            values,
            type: value.type || "Text",
            isMandatory: value.isMandatory || true,
            activeSurvey: activeSurvey
        })
     }

    editQuestion = (e, id) => {
        e.preventDefault()

        const {
            setActiveQuestion,
            activeSurveysQuestions,
            setQuestionValues
        } = this.props

        setActiveQuestion(id);
        
        const question = activeSurveysQuestions.filter(q => {
            if (id === q.question) return q
            return
        })

        setQuestionValues(question[0])

    }

    unsetActiveQuestion = () =>
        this.props.unsetActiveQuestion();

    publishForm = () => {

        const {
            activeSurveysQuestions,
            activeSurvey
        } = this.props

        axios.post("/api/project/createQuestion", {
            activeSurveysQuestions, 
            activeSurvey
        })
        .then(a => console.log('returned.....'))
    }

    updateQuestion = (newQuestionValue) => {

        const {
            updateQuestion,
            unsetActiveQuestion,
            unsetActiveQuestionValues,
            activeSurvey,
            activeQuestion
        } = this.props
        
        updateQuestion({newQuestionValue, activeQuestion, activeSurvey})
        unsetActiveQuestionValues()
        unsetActiveQuestion()
    }

    render(){
        return (
            <div className="container">
                <div className="grid-row">
                     <div className="column-one-quarter border-right">
                        <ProjectOverview 
                            
                            data={this.props.activeProjectsSurveys} 
                            questions={this.props.activeSurveysQuestions} 
                            publishForm={this.publishForm} 
                            editQuestion={this.editQuestion} 
                            activeQuestion={this.props.activeQuestion} 
                            unsetActiveQuestion={this.unsetActiveQuestion}
                        />
                     </div>                 
                     <div className="column-three-quarter">
                        <AddNewQuestion 
                            updateQuestion={this.updateQuestion}
                            activeQuestion={this.props.activeQuestion}
                            addQuestion={this.addQuestion}
                        />         
                     </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    activeSurveysQuestions: selectors.activeSurveysQuestions(state),
    activeProjectsSurveys: selectors.activeProjectsSurveys(state),
    activeSurvey: selectors.activeSurvey(state),
    activeQuestion: selectors.activeQuestion(state),
    activeQuestionValue: selectors.activeQuestionValues(state),
})

const mapStateToDispatch = (dispatch) => bindActionCreators({
    addQuestion: (activeSurvey, questions) => actions.addQuestion(activeSurvey, questions),
    setActiveQuestion: (questionId) => actions.setActiveQuestion(questionId),
    setQuestionValues: (values) => actions.setQuestionValues(values),
    unsetActiveQuestionValues: () => actions.unsetActiveQuestionValues(),
    unsetActiveQuestion: () => actions.unsetActiveQuestion(),
    updateQuestion: (payload) => actions.updateQuestion(payload)
}, dispatch)

export default connect(mapStateToProps, mapStateToDispatch)(Project)