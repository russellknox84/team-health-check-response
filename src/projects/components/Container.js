import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

import {Dashboard} from "../../dashboard"
import Questions from "../../questions/components/Project"
import ProjectList from './ProjectList'
import Project from './Project'
import Surveys from "../../surveys"

class Container extends Component {

    unsetActiveProject = () => {
        this.props.unsetActiveProject()
    }

    unsetActiveSurvey = () => {
        this.props.unsetActiveSurvey()
    }
    
    render = () => {
        return (
            <Router> 
                <div>
                    <div className="spacing">
                        <ul className="navigation">
                            <li>
                                <Link className="link" to="/projects">Projects</Link>
                            </li>
                            {this.props.projectName ?
                            <li>
                                <div className="spacer"> > </div>
                                <Link className="link" to={`/projects/${this.props.projectName}`}>{this.props.projectName}</Link>
                            </li> : ""
                            }
                            {this.props.surveyName ?
                            <li>
                                <div className="spacer"> > </div>
                                <Link className="link" to={`/projects/${this.props.projectName}/${this.props.surveyName}`}>{this.props.surveyName}</Link>
                            </li> : ""
                            }
                        </ul>
                    </div> 
            
                    <div>
                        <Route exact path="/"/>
                        <Route exact path="/projects/" component={ProjectList}/>
                        <Route exact path="/projects/:project" component={Surveys}/>
                        <Route path="/projects/:project/:survey" component={Project}/> 
                    </div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    projectName: state.project.activeProject,
    surveyName: state.surveys.activeSurvey
})

const mapStateToDispatch = (action) => ({
    unsetActiveProject: () => action({type: "UNSET_ACTIVE_PROJECT"}),
    unsetActiveSurvey: () => action({type: "UNSET_ACTIVE_SURVEY"})
})

export default connect(mapStateToProps, mapStateToDispatch)(Container)