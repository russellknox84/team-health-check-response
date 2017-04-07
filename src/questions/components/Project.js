import React, { Component } from "react"
import { connect } from "react-redux"

import axios from "axios"

import ProjectOverview from "./projectOverview"
import AddNewQuestion from "./addNewQuestion"

import "../../../sass/index.scss"

class Project extends Component {

    addQuestion = (value) => {
        const values = [
                {id: 1, value: 1, text: ''},
                {id: 2, value: 2, text: ''},
                {id: 3, value: 3, text: ''},
                {id: 4, value: 4, text: ''},
                {id: 5, value: 5, text: ''}
            ]
        //const removeSpace = question.replace(" ", "-")
        const id = 1234

        this.props.addQuestion(this.props.activeSurvey, 
        {   id,
            question: value.question || 'A question',
            validation: value.validation || "none",
            values,
            type: value.type || "Radio",
            isMandatory: value.isMandatory || true,
            activeSurvey: this.props.activeSurvey
        })



     }

    editQuestion = (e, id) => {
        const state = this.props.state
        e.preventDefault()

        this.props.setActiveQuestion(id);

        const activeQuestion = state.questions.questions[state.surveys.activeSurvey]

        const question = activeQuestion.filter(q => {
            if (id === q.question) return q
            return
        })
  
        this.props.setQuestionValues(question[0])
    }

    unsetActiveQuestion = () => {
        this.props.unsetActiveQuestion();
    }

    publishForm = () => {
        const formData = this.props.questions
        console.log(formData, "form-data.....")
        const activeSurvey = this.props.activeSurvey
        axios.post("/api/project/createQuestion", {formData, activeSurvey})
           .then(a => console.log('returned.....'))
    }

    updateQuestion = (newQuestionValue) => {
        const activeSurvey = this.props.activeSurvey
        const questionId = this.props.activeQuestion
        this.props.updateQuestion({newQuestionValue, questionId, activeSurvey})
        this.props.unsetActiveQuestionValues()
        this.props.unsetActiveQuestion()
    }

    render(){
        return (
            <div className="container">
                <div className="grid-row">
                     <div className="column-one-quarter border-right">
                          {console.log(this.props, "th porperlislid++++++=")}
                          <ProjectOverview 
                            data={this.props.project} 
                            questions={this.props.questions} 
                            publishForm={this.publishForm} 
                            editQuestion={this.editQuestion} 
                            activeQuestion={this.props.activeQuestion} 
                            unsetActiveQuestion={this.unsetActiveQuestion}/>
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

// const getActiveValues = (state) => {
//     const activeQuestion = state.questions.activeQuestion
//     const activeSurvey = state.surveys.activeSurvey
//     const questionList = state.questions.questions[activeSurvey]

//     console.log("the quesltion leus", activeQuestion, activeSurvey)

//     return questionList.filter(question => {
//         if (question.question === activeQuestion) return question
//         return
//     })


// }

const mapStateToProps = (state) => ({
    questions: state.questions.questions[state.surveys.activeSurvey],
    project: state.project.projects[state.surveys.activeSurvey],
    activeSurvey: state.surveys.activeSurvey,
    activeQuestion: state.questions.activeQuestion,
    activeQuestionValue: state.questions.activeQuestionvalues,
    //activeQuestionValues: getActiveValues(state),
    state: state
})

const mapStateToDispatch = (action) => ({
    addQuestion: (activeSurvey, questions) => action({type: "ADD_QUESTION", activeSurvey, questions}),
    setActiveQuestion: (questionId) => action({type: "SET_ACTIVE_QUESTION", questionId}),
    setQuestionValues: (values) => action({type: "SET_ACTIVE_QUESTION_VALUES", values}),
    unsetActiveQuestionValues: () => action({type: "UNSET_ACTIVE_QUESTION_VALUES"}),
    unsetActiveQuestion: () => action({type: "UNSET_ACTIVE_QUESTION"}), 
    updateQuestion: (payload) => action({type: "UPDATE_QUESTION", payload})
})

export default connect(mapStateToProps, mapStateToDispatch)(Project)