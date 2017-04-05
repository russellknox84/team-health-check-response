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

    findProject = () => {
        axios.put("/api/project/findProject")
            .then(a => console.log("popopo", a))
    }
    
    render() {
      return (   
        <div className="container">
            <div className="grid-row">
                <div className="column-one-quarter">
                <h2 className="heading-small heading-contents">Current Projects:</h2>
                    {this.props.projects.map(project => {
                        {console.log(this.props)}
                    return  <ul className="list list-contents" onClick={() => this.setActiveProject(project)}>
                            <li><Link to={`${this.props.match.url}/${project}`}>{project}</Link></li>
                        </ul>
                    }
                    )}
                 </div>
                 <div className="column-three-quarter">
                 <h2 className="heading-small heading-contents">Add new project:</h2>
                      <form onSubmit={this.addNewProject}>
                      <div className="form-group">
                        <input className="form-control" type="text" name="addNewProject" autoComplete="off" />
                      </div>
                        <div>
                         <input className="button submit-response" type="submit" value="Add Project" />
                        </div>
                    </form>
                                       <div>
                            <button onClick={this.findProject}>Find Project</button>
                        </div>
                 </div>
            </div>
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