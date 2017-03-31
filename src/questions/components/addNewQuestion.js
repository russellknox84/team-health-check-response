import React from "react"

const addNewQuestion = ({addOne}) =>

    <div>
        <form onSubmit={addOne}>
        <div className="grid-row">
            <div className="column-half">
                <h2 className="heading-small">Question</h2>
                <div className="form-group">
                    <label className="form-label" for="first-name-2">Title</label>
                    <input className="form-control full-width"  name="question" type="text" autoComplete="off" />
                </div>
                <div className="form-group">
                    <label className="form-label" for="select-box">Input type</label>
                    <select className="form-control" id="select-box" name="type">
                        <option value="Text">Text</option>
                        <option value="Radio">Multiple choice</option>
                        <option value="scaled">Scaled question</option>
                        <option value="yesNo">Yes/No question</option>
                    </select>
                </div>
            </div>
            <div className="column-half">
                <h2 className="heading-small">Configuration</h2>
                <legend>Is the question mandatory?</legend>
                <fieldset id="question-configuration">
                    <div className="multiple-choice">
                        <input id="YesNo" type="radio" name="type" value="yes"  autoComplete="off"/>
                        <label for="YesNo">Yes</label>
                    </div>
                    <div className="multiple-choice">
                        <input id="MulitpleChoice" type="radio" name="type" value="no"  autoComplete="off"/>
                        <label for="MulitpleChoice">No</label>
                    </div>
                </fieldset>
            </div>
        </div>
        <div className="grid-row">
            <div className="column-full">
                <input className="button submit-response" type="submit" value="Add" />
            </div>
        </div>
        </form>
    </div>

export default addNewQuestion