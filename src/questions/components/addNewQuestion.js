import React from "react"

const addNewQuestion = ({addOne}) =>
    <div>
        <form onSubmit={addOne}>
       
        <div className="form-group">
                <label className="form-label" for="first-name-2"></label>
                <input className="form-control"  name="question" type="text" autoComplete="off" />
             </div>
        <fieldset>
            
            <div className="multiple-choice">
                <input id="Radio" type="radio" name="type" value="Radio" />
                <label htmlFor="Radio">Radio</label>
            </div>
            <div className="multiple-choice">
                <input id="Text" type="radio" name="type" value="Text"  autoComplete="off"/>
                <label for="Tetx">Free text</label>
            </div>
            </fieldset>

            <div>
              <input className="button submit-response" type="submit" value="Add" />
            </div>
        </form>
        

    </div>

export default addNewQuestion