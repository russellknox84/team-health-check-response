import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, Route } from "react-router-dom"

import {Dashboard} from "../../dashboard"
import Questions from "../../questions/components/Project"

class Project extends Component {
    
    render = () => {
        return (
            <div>              
                <div className="top-tab-container container">
                    <div className="grid-row">
                        <div className="column-full">
                            <Link role="button" className="top-tab" to={`${this.props.match.url}`}>Question</Link>
                            <Link role="button" className="top-tab" to={`${this.props.match.url}/results`}>Results</Link>
                            <Link role="button" className="top-tab hidden" to={`${this.props.match.url}/overview`}>Overview</Link>
                        </div>
                    </div>
                </div>
                            
                <Route exact path={`${this.props.match.url}/`} component={Questions} />
                <Route exact path={`${this.props.match.url}/results`} component={Dashboard} />
                <Route exact path={`${this.props.match.url}/overview`} render={() => <div>Overview</div>} />       
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(Project)