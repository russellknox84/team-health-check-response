import React, { Component } from "react"
import { connect } from "react-redux"

class Project extends Component {
    
    render() {
        return <div>{this.props.projectName}</div>
    }
}

const mapStateToProps = (state) => ({
    projectName: state.project.activeProject
})

export default connect(mapStateToProps)(Project)