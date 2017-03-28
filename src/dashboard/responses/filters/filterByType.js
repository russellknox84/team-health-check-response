import React from "react"

import "../../../../sass/index.scss"

const FilterByType = ({filter, value}) =>
            <form>
                <fieldset>
                    <div className="form-group">
                        <div className="multiple-choice inline">
                            <input type="radio" checked={value === "responses"} name="arrangeByType" value="responses" onChange={filter} />
                            <label htmlFor="0">Responses</label>  
                        </div>                        
                        <div className="multiple-choice inline">
                            <input type="radio" checked={value === "questions"} name="arrangeByType" value="questions" onChange={filter} />
                            <label htmlFor="1">Questions</label>
                        </div>
                    </div>
                </fieldset>
            </form>

export default FilterByType
