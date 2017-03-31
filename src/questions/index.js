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
        console.log(this.props.tree)
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

    addProject = (e) => {
        e.preventDefault()
        const length = this.props.projects.length + 1
        const name = e.target.newProject.value
        const url = name.toLowerCase().replace(" ", "-")

        this.props.addProject({
            id: length,
            name, 
            url
        })

        e.target.newProject.value = ""

    }

    test = (input) => {
        console.log(this.props)
        console.log(input)
    }
    render = () => 
        <div className="container">
            <div className="grid-row">
                <div className="column-half">
                    <h2 className="heading-small heading-contents">Current Projects:</h2>
                    {this.props.projects.map(project => 
                        <ul className="list list-contents" onClick={() => this.props.activeProject(project)}>
                            <li><Link to={`${this.props.match.url}/${project}`}>{project}</Link></li>
                        </ul>
                    )}
                </div>
                <div className="column-half">
                    <h2 className="heading-small heading-contents">Add New Project:</h2>
                    <form onSubmit={this.addProject}>
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
    tree: state,
    projects: state.projects.projectId,
})
const mapDispatchToProps = (action) => ({
    addProject: (input) => {
        action({type: "ADD_PROJECT", payload: input})
    },
    activeProject: (id, project) => action({type: "ACTIVE_PROJECT", id, project})
})
    
export default connect(mapStateToProps, mapDispatchToProps)(Test)