import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import axios from "axios"

import { projectsList } from "../selectors"

import {
    addNewProject,
    setActiveProject,
    unsetActiveProject,
    unsetActiveSurvey,
    unsetActiveQuestion
} from "../actions"

class ProjectList extends Component {

    componentDidMount = () => {
        this.props.unsetActiveProject();
        this.props.unsetActiveSurvey();
        this.props.unsetActiveQuestion();        
    }

    addNewProject = (e) => {
        e.preventDefault()

        const projectName = e.target.addNewProject.value

        axios.post("/api/project/createProject", { projectName })
            .then(a => this.props.addNewProject(projectName))
    }

    setActiveProject = (projectId) => {
        this.props.setActiveProject(projectId)
    }

    findProject = () => {
        axios.put("/api/project/findProject")
            .then(a => console.log("popopo", a))
    }
    
    render() {
      return (   
        <div className="container">
            <div className="grid-row">
                <div id="project-list" className="column-one-quarter border-right overflow-auto">
                <h2 className="heading-small heading-contents">Current Projects</h2>
                    <div>
                        {this.props.projectsList.map(project => {
                            {console.log(this.props)}
                            return  <div>
                                        <Link role="button" className="tab" onClick={() => this.setActiveProject(project)} to={`${this.props.match.url}/${project}`}>{project}</Link>
                                    </div>
                        }
                        )}
                    </div>
                 </div>
                 <div id="project-editor" className="column-three-quarter">
                 <h2 className="heading-small heading-contents">Add new project</h2>
                        <form onSubmit={this.addNewProject}>
                        <div className="form-group">
                            <input className="form-control" type="text" name="addNewProject" autoComplete="off" />
                        </div>
                        <div>
                            <input className="button submit-response" type="submit" value="Add Project" />
                        </div>
                    </form>
                    <div>
                        <button className="hidden" onClick={this.findProject}>Find Project</button>
                    </div>
                 </div>
            </div>
          </div>
      )  
    }
}

const mapStateToProps = (state) => ({
    projectsList: projectsList(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addNewProject,
    setActiveProject,
    unsetActiveProject,
    unsetActiveSurvey,
    unsetActiveQuestion
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)