import React, { Component } from "react"
import { connect } from "react-redux"

class AddNewQuestion extends Component {

    componentDidMount = () => {
        this.props.unsetActiveQuestion()
        this.props.unsetActiveQuestionValues()
    }
 
    updateQuestion = () => {
        const newQuestionValues = this.props.activeQuestionValue    
        this.props.updateQuestion(newQuestionValues)
    }

    deleteQuestion = () => {
        const activeQuestion = this.props.activeQuestion
        const activeSurvey = this.props.activeSurvey

        this.props.deleteQuestion({ activeQuestion, activeSurvey })
        this.props.unsetActiveQuestion()
        this.props.unsetActiveQuestionValues()
    }

    addQuestion = () => {
        const newQuestionValues = this.props.activeQuestionValue

        this.props.addQuestion(newQuestionValues)
        this.props.unsetActiveQuestion()
        this.props.unsetActiveQuestionValues()
    }

    onQuestionUpdate = (e) => {
        console.log("question", e.target.value)
        const currentValues = this.props.activeQuestionValue
        this.props.onQuestionUpdate({ question: e.target.value }, currentValues)
    }

    onTypeUpdate = (e) => {
        console.log("typevalue", e.target.value)
        const currentValues = this.props.activeQuestionValue
        this.props.onQuestionUpdate({ type: e.target.value }, currentValues)
    }

    onMandatoryUpdate = (e) => {
        console.log("mandatory", e.target.value)
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
                                <input onChange={this.onMandatoryUpdate} id="isMandatory" type="radio" name="isMandatory" value="true"/>
                                <label htmlFor="isMandatory">Yes</label>
                            </div>
                            <div className="multiple-choice">
                                <input onChange={this.onMandatoryUpdate} id="isMandatory" type="radio" name="isMandatory" value="false"/>
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
    activeQuestionValue: state.questions.activeQuestionvalues,
    activeSurvey: state.surveys.activeSurvey,
    state: state
})

const mapStateToDispatch = (action) => ({
    onQuestionUpdate: (payload, currentValues) => action({type: "UPDATE_ACTIVE_QUESTION_VALUES", payload, currentValues}),
    deleteQuestion: (payload) => action({type: "DELETE_QUESTION", payload}),
    unsetActiveQuestionValues: () => action({type: "UNSET_ACTIVE_QUESTION_VALUES"}),
    unsetActiveQuestion: () => action({type: "UNSET_ACTIVE_QUESTION"})
})
export default connect(mapStateToProps, mapStateToDispatch)(AddNewQuestion)