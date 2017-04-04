import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, Route } from "react-router-dom"

import {Dashboard} from "../../dashboard"
import Questions from "../../questions/components/Project"

class Project extends Component {
    
    render = () => {
        return (
            <div>
               <h1> {this.props.projectName} </h1>
               <h1> {this.props.surveyName} </h1>
               
                <div>
                    <Link to={`${this.props.match.url}/questions`}>Question</Link>
                    <Link to={`${this.props.match.url}/results`}>Results</Link>
                    <Link to={`${this.props.match.url}/overview`}>Overview</Link>
                </div>
                            
                <Route path={`${this.props.match.url}/questions`} component={Questions} />
                <Route path={`${this.props.match.url}/results`} render={() => <div>Qyestion</div>} />
                <Route path={`${this.props.match.url}/overview`} render={() => <div>Overview</div>} />       
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    projectName: state.project.activeProject,
    surveyName: state.surveys.activeSurvey.id
})

export default connect(mapStateToProps)(Project)