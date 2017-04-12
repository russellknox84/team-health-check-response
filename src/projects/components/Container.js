import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import { bindActionCreators } from "redux"

import { activeProject, activeSurvey } from "../selectors"

import {
    unsetActiveProject,
    unsetActiveSurvey,
} from "../actions"


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
                            {this.props.activeProject ?
                            <li>
                                <div className="spacer"> > </div>
                                <Link className="link" to={`/projects/${this.props.activeProject}`}>{this.props.activeProject}</Link>
                            </li> : ""
                            }
                            {this.props.activeSurvey ?
                            <li>
                                <div className="spacer"> > </div>
                                <Link className="link" to={`/projects/${this.props.activeProject}/${this.props.activeSurvey}`}>{this.props.activeSurvey}</Link>
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
    activeProject: activeProject(state),
    activeSurvey: activeSurvey(state)
})

const mapStateToDispatch = dispatch => bindActionCreators({
    unsetActiveProject,
    unsetActiveSurvey
}, dispatch)

export default connect(mapStateToProps, mapStateToDispatch)(Container)