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
        const type = e.target.type.options[e.target.type.selectedIndex].textContent
        const values = [
                {id: 1, value: 1},
                {id: 2, value: 2},
                {id: 3, value: 3},
                {id: 4, value: 4},
                {id: 5, value: 5}
            ]
        const removeSpace = question.replace(" ", "-")
        const id = `Q${removeSpace.substring(0, 14)}`
        
        

        console.log(type, "type")

        this.props.addQuestion(this.props.activeProject, {
            id,
            question,
            validation: "none",
            values,
            type
        })

        e.target.question.value = ""


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
                     <div className="column-one-quarter">
                          <h2 className="heading-small heading-contents">Questions</h2>
                          <ProjectOverview data={this.props.project} questions={this.props.questions} publishForm={this.publishForm}/>
                     </div>
                   
                     <div className="column-three-quarter">
                          <h2 className="heading-small heading-contents">Add Question</h2>
                          <AddNewQuestion  addOne={this.addQuestion} />
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
    summary: state.projects
})

const mapStateToDispatch = (action) => ({
    addQuestion: (activeProject, question, questionId) => action({type: "ADD_QUESTION", activeProject, question})
})

export default connect(mapStateToProps, mapStateToDispatch)(Project)