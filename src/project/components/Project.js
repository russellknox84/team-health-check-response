import React, { Component } from "react"
import { connect } from "react-redux"

class Projects extends Component {

    
    render() {
      return (   
          <div>
            {this.props.projects.map(project => 
                <div>{project}</div>  
            )}
          </div>
      )  
    }
}

const mapStateToProps = (state) => ({
    projects: state.project
})

export default connect(mapStateToProps)(Projects)