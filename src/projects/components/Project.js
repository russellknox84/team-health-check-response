import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, Route } from "react-router-dom"

import {Dashboard} from "../../dashboard"
import Questions from "../../questions/components/Project"

class Project extends Component {
    
    render = () => {
        return (
            <div>              
                <div className="top-tab-container">
                    <Link role="button" className="top-tab" to={`${this.props.match.url}/`}>Question</Link>
                    <Link role="button" className="top-tab" to={`${this.props.match.url}/results`}>Results</Link>
                    <Link role="button" className="top-tab" to={`${this.props.match.url}/overview`}>Overview</Link>
                </div>
                            
                <Route exact path={`${this.props.match.url}/`} component={Questions} />
                <Route path={`${this.props.match.url}/results`} component={Dashboard} />
                <Route path={`${this.props.match.url}/overview`} render={() => <div>Overview</div>} />       
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(Project)