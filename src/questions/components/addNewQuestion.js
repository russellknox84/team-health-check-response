import React from "react"

const addNewQuestion = ({addOne, activeQuestion}) =>

    <div>
        <form onSubmit={addOne}>
        <div className="grid-row">
            <div className="column-half">
                <h2 className="heading-small">Question</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="first-name-2">Title</label>
                    <input className="form-control full-width"  name="question" type="text" autoComplete="off" />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="select-box">Input type</label>
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
            {activeQuestion ?
                <div><input className="button submit-response margin-right" type="submit" value="Update" />
                <button className="button submit-response">Delete</button></div> :
                <div><input className="button submit-response" type="submit" value="Add" /></div>
            }
            </div>
        </div>
        </form>
    </div>

export default addNewQuestion