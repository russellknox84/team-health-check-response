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
                    <select className="full-width form-control" id="select-box" name="type">
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
                        <label for="isMandatory">Yes</label>
                    </div>
                    <div className="multiple-choice">
                        <input id="isMandatory" type="radio" name="isMandatory" value="no" />
                        <label for="isMandatory">No</label>
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