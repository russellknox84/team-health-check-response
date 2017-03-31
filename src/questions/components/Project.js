import React, { Component } from "react"
import { connect } from "react-redux"

import axios from "axios"

import ProjectOverview from "./projectOverview"
import AddNewQuestion from "./addNewQuestion"

import "../../../sass/index.scss"

class Project extends Component {

    addQuestion = (e) => {
        e.preventDefault()
        const question = e.target.question.value
        
        
        // const validation = [...e.target.validation].map(a => {
        //     if (a.checked === true) return a.value
        // })
        const type = e.target.type.value
        const values = [
                {id: 1, value: 1, text: ''},
                {id: 2, value: 2, text: ''},
                {id: 3, value: 3, text: ''},
                {id: 4, value: 4, text: ''},
                {id: 5, value: 5, text: ''}
            ]
        const removeSpace = question.replace(" ", "-")
        const id = `Q${removeSpace.substring(0, 14)}`

        const isMandatory = e.target.isMandatory.value === 'yes' ? true : false;
        
        

        console.log(type, "type")

        this.props.addQuestion(this.props.activeProject, {
            id,
            question,
            validation: "none",
            values,
            type,
            isMandatory
        })

        e.target.question.value = ""


    }

    editQuestion = (e, id) => {
        e.preventDefault()
        this.props.setActiveQuestion(id);
        console.log(e + ' ' + id)
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

    render(){
        return (
            <div className="container">
                <div className="grid-row">
                     <div className="column-one-quarter border-right">
                          <h2 className="heading-small heading-contents">Questions</h2>
                          <ProjectOverview data={this.props.project} questions={this.props.questions} publishForm={this.publishForm} editQuestion={this.editQuestion} activeQuestion={this.props.activeQuestion} unsetActiveQuestion={this.unsetActiveQuestion}/>
                     </div>
                   
                     <div className="column-three-quarter">
                            {this.props.activeQuestion ?
                                <h2 className="heading-small heading-contents">Edit Question</h2>  :
                                <h2 className="heading-small heading-contents">Add Question</h2>
                            }
                          <AddNewQuestion  addOne={this.addQuestion} activeQuestion={this.props.activeQuestion}/>
                     </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    questions: state.projects.projects[state.projects.activeProject.id],
    project: state.projects.projects[state.projects.activeProject.id],
    activeProject: state.projects.activeProject,
    activeQuestion: state.projects.setActiveQuestion,
    summary: state.projects
})

const mapStateToDispatch = (action) => ({
    addQuestion: (activeProject, question, questionId) => action({type: "ADD_QUESTION", activeProject, question}),
    setActiveQuestion: (questionId) => action({type: "SET_ACTIVE_QUESTION", questionId}),
    unsetActiveQuestion: () => action({type: "UNSET_ACTIVE_QUESTION"})
})

export default connect(mapStateToProps, mapStateToDispatch)(Project)