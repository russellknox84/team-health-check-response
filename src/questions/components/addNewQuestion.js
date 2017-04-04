import React, { Component } from "react"
import { connect } from "react-redux"

class AddNewQuestion extends Component {
 
    publishSurvey = () => {
        const newQuestionValues = this.props.activeQuestionValue    
        this.props.updateQuestion(newQuestionValues)
    }

    onQuestionUpdate = (e) => {
        const currentValues = this.props.activeQuestionValue
        this.props.onQuestionUpdate({ question: e.target.value }, currentValues)
    }

    onTypeUpdate = (e) => {
        const currentValues = this.props.activeQuestionValue
        this.props.onQuestionUpdate({ type: e.target.value }, currentValues)
    }
     
    render = () => {
        const {id, question, type} = this.props.activeQuestionValue

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
                                autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="select-box">Input type</label>
                            <select value={type} onChange={this.onTypeUpdate} className="full-width form-control" id="select-box" name="type">
                                <option value="Text">Text</option>
                                <option value="Radio">Multiple choice</option>
                                <option value="Scaled">Scaled question</option>
                                <option value="YesNo">Yes/No question</option>
                            </select>
                        </div>
                    </div>
                    <div className="column-half">
                        <h2 className="heading-small">Configuration</h2>
                        <legend>Is the question mandatory?</legend>
                        <fieldset id="question-configuration">
                            <div className="multiple-choice">
                                <input id="isMandatory" type="radio" name="isMandatory" value="yes" checked/>
                                <label htmlFor="isMandatory">Yes</label>
                            </div>
                            <div className="multiple-choice">
                                <input id="isMandatory" type="radio" name="isMandatory" value="no" />
                                <label htmlFor="isMandatory">No</label>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="grid-row">
                    <div className="column-full">
                    {console.log(this.props.activeQuestion, "is prop active")}
                    {this.props.activeQuestion ?
                        <div>
                            <button onClick={this.publishSurvey} className="button submit-response margin-right">Update</button>
                            <button className="button submit-response">Delete</button>
                        </div> :
                        <div>
                            <button onClick={this.publishSurvey} className="button submit-response">Add</button>
                        </div>
                    }
                    </div>
                </div>
            </div>
        )
   }
}

const getActiveValues = (state) => {
    const activeQuestion = state.questions.activeQuestion
    const activeSurvey = state.surveys.activeSurvey
    const questionList = state.questions.questions[activeSurvey]

    return questionList.filter(question => {
        if (question.question === activeQuestion) return question
        return
    })
}

const mapStateToProps = (state) => ({
    activeQuestionValues: getActiveValues(state),
    activeQuestionValue: state.questions.activeQuestionvalues,
    state: state
})

const mapStateToDispatch = (action) => ({
    onQuestionUpdate: (payload, currentValues) => action({type: "UPDATE_ACTIVE_QUESTION_VALUES", payload, currentValues})
})
export default connect(mapStateToProps, mapStateToDispatch)(AddNewQuestion)