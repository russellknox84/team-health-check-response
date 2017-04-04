import React, { Component } from "react"
import { connect } from "react-redux"

import axios from "axios"

import ProjectOverview from "./projectOverview"
import AddNewQuestion from "./addNewQuestion"

import "../../../sass/index.scss"

class Project extends Component {

    addQuestion = (questions) => {
    //     e.preventDefault()
    //     const question = e.target.question.value
    //     const type = e.target.type.value
    //     const values = [
    //             {id: 1, value: 1, text: ''},
    //             {id: 2, value: 2, text: ''},
    //             {id: 3, value: 3, text: ''},
    //             {id: 4, value: 4, text: ''},
    //             {id: 5, value: 5, text: ''}
    //         ]
    //     const removeSpace = question.replace(" ", "-")
    //     const id = `Q${removeSpace.substring(0, 14)}`

    //     const isMandatory = e.target.isMandatory.value === 'yes' ? true : false;
        
        const { question, validation } = this.props.activeSurvey

        this.props.addQuestion(this.props.activeSurvey, 
        {   id: 1234,
            question,
            validation,
            values: 1234,
            type: "Radio",
            isMandatory: true
        })

        e.target.question.value = ""


     }

    editQuestion = (e, id) => {
        const state = this.props.state
        e.preventDefault()

        this.props.setActiveQuestion(id);
        console.log(this.props.state, "state")
        const activeQuestion = state.questions.questions[state.surveys.activeSurvey]

        const question = activeQuestion.filter(q => {
            if (id === q.question) return q
            return
        })
  
        this.props.setQuestionValues(question[0])
    }

    unsetActiveQuestion = (e, id) => {
        e.preventDefault()
        this.props.unsetActiveQuestion(id);
    }

    publishForm = () => {
        const formData = this.props.questions

        axios.post("/form-data-submission", {formData})
           .then(a => console.log('returned.....'))
    }

    updateQuestion = (newQuestionValue) => {
        const activeSurvey = this.props.activeSurvey
        const questionId = this.props.activeQuestion
        this.props.updateQuestion({newQuestionValue, questionId, activeSurvey})
    }

    render(){
        return (
            <div className="container">
                <div className="grid-row">
                     <div className="column-one-quarter border-right">
                          <h2 className="heading-small heading-contents">Questions</h2>
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
                          />         
                     </div>
                </div>
            </div>
        )
    }
}

const getActiveValues = (state) => {
    const activeQuestion = state.questions.activeQuestion
    const activeSurvey = state.surveys.activeSurvey
    const questionList = state.questions.questions[activeSurvey]

    return questionList.filter(question => {
        if (question.question === activeQuestion) return question
        return
    })


}

const mapStateToProps = (state) => ({
    questions: state.questions.questions[state.surveys.activeSurvey],
    project: state.project.projects[state.surveys.activeSurvey],
    activeSurvey: state.surveys.activeSurvey,
    activeQuestion: state.questions.activeQuestion,
    activeQuestionValue: state.questions.activeQuestionvalues,
    activeQuestionValues: getActiveValues(state),
    state: state
})

const mapStateToDispatch = (action) => ({
    addQuestion: (activeSurvey, questions) => action({type: "ADD_QUESTION", activeSurvey, questions}),
    setActiveQuestion: (questionId) => action({type: "SET_ACTIVE_QUESTION", questionId}),
    setQuestionValues: (values) => action({type: "SET_ACTIVE_QUESTION_VALUES", values}),
    unsetActiveQuestion: () => action({type: "UNSET_ACTIVE_QUESTION"}),
    updateQuestion: (payload) => action({type: "UPDATE_QUESTION", payload})
})

export default connect(mapStateToProps, mapStateToDispatch)(Project)