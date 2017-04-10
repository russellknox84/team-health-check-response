import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { activeQuestionValues, activeSurvey } from "../selectors"
import * as actions from "../actions"

class AddNewQuestion extends Component {

    componentDidMount = () => {
        this.props.unsetActiveQuestion()
        this.props.unsetActiveQuestionValues()
    }
 
    updateQuestion = () => {
        const {
            activeQuestionValue,
        } = this.props
    
        this.props.updateQuestion(activeQuestionValue)
    }

    deleteQuestion = () => {
        const {
            activeQuestion,
            activeSurvey,
            deleteQuestion,
            unsetActiveQuestion,
            unsetActiveQuestionValues
        } = this.props

        deleteQuestion({ activeQuestion, activeSurvey })
        unsetActiveQuestion()
        unsetActiveQuestionValues()
    }

    addQuestion = () => {
        const {
            activeQuestionValue,
            addQuestion,
            unsetActiveQuestion,
            unsetActiveQuestionValues
        } = this.props

        addQuestion(activeQuestionValue)
        unsetActiveQuestion()
        unsetActiveQuestionValues()
    }

    onQuestionUpdate = (e) => {
        const currentValues = this.props.activeQuestionValue
        this.props.onQuestionUpdate({ question: e.target.value }, currentValues)
    }

    onTypeUpdate = (e) => {
        const currentValues = this.props.activeQuestionValue
        this.props.onQuestionUpdate({ type: e.target.value }, currentValues)
    }

    onMandatoryUpdate = (e) => {
        const currentValues = this.props.activeQuestionValue
        this.props.onQuestionUpdate({ isMandatory: e.target.value }, currentValues)
    }
     
    render = () => {
        const {id, question, type, isMandatory} = this.props.activeQuestionValue

        return (
            <div>
                <div className="grid-row">
                    <div className="column-half">
                        <h2 className="heading-small">Question</h2>
                        <div className="form-group">
                            <label className="form-label" htmlFor="first-name-2">Title</label>
                            <input 
                                value={question} 
                                onChange={this.onQuestionUpdate} 
                                className="form-control full-width"  
                                name="question" type="text" 
                                autoComplete="off" 
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="select-box">Input type</label>
                            <select value={type} onChange={this.onTypeUpdate} className="full-width form-control" id="select-box" name="type">
                                <option value="Text">Text</option>
                                <option value="Radio">Scaled question</option>
                            </select>
                        </div>
                    </div>
                    <div className="column-half">
                        <h2 className="heading-small">Configuration</h2>
                        <legend>Is the question mandatory?</legend>
                        <fieldset id="question-configuration">
                            <div className="multiple-choice">
                                <input onChange={this.onMandatoryUpdate} id="isMandatory" checked={isMandatory !== "false"} type="radio" name="isMandatory" value="true"/>
                                <label htmlFor="isMandatory">Yes</label>
                            </div>
                            <div className="multiple-choice">
                                <input onChange={this.onMandatoryUpdate} id="isMandatory" checked={isMandatory === "false"} type="radio" name="isMandatory" value="false"/>
                                <label htmlFor="isMandatory">No</label>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="column-full">
                    {this.props.activeQuestion ?
                        <div>
                            <button onClick={this.updateQuestion} className="button submit-response margin-right">Update</button>
                            <button onClick={this.deleteQuestion} className="button submit-response">Delete</button>
                        </div> :
                        <div>
                            <button onClick={this.addQuestion} className="button submit-response">Add</button>
                        </div>
                    }
                    </div>
                </div>
            </div>
        )
   }
}
const mapStateToProps = (state) => ({
    activeQuestionValue: activeQuestionValues(state),
    activeSurvey: activeSurvey(state),
})

const mapStateToDispatch = (dispatch) => bindActionCreators({
    onQuestionUpdate: (payload, currentValues) => actions.onQuestionUpdate(payload, currentValues),
    deleteQuestion: (payload) => actions.deleteQuestion(payload),
    unsetActiveQuestionValues: () => actions.unsetActiveQuestionValues(),
    unsetActiveQuestion: () => actions.unsetActiveQuestion()
}, dispatch)

export default connect(mapStateToProps, mapStateToDispatch)(AddNewQuestion)