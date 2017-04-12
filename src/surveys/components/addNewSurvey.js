import React from "react"

const addNewSurvey = ({ addSurvey }) => 
    <div id="survey-editor" className="column-three-quarter">
        <h2 className="heading-small heading-contents">Add new survey</h2>
        <form onSubmit={addSurvey}>
            <div className="form-group">
                <input className="form-control" type="text" name="newProject" id="newProject" autoComplete="off" />
            </div>
            <div>
            <input className="button submit-response" type="submit" value="Add Survey" />
            </div>
        </form>
    </div>

export default addNewSurvey