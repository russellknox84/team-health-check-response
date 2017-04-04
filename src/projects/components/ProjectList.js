import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"

class ProjectList extends Component {

    componentDidMount(){
        //console.log(this.props.state)
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
    
    render() {
      return (   
          <div>
            <form onSubmit={this.addNewProject}>
                <input type="text" name="addNewProject" />
                <input type="submit" />
            </form>
            {this.props.projects.map(project => {
                {console.log(this.props)}
               return  <ul className="list list-contents" onClick={() => this.setActiveProject(project)}>
                    <li><Link to={`${this.props.match.url}/${project}`}>{project}</Link></li>
                </ul>
              }
            )}

     
          </div>
      )  
    }
}

const mapStateToProps = (state) => ({
    projects: state.project.projectIds,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    addNewProject: (projectName) => dispatch({type: "ADD_NEW_PROJECT", projectName }),
    setActiveProject: (projectId) => dispatch({type: "SET_ACTIVE_PROJECT", projectId })
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)