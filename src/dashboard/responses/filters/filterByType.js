import React from "react"

import "../../../../sass/index.scss"

const FilterByType = ({filter, value}) =>
            <form>
                <fieldset>
                    <div className="form-group">
                        <div className="multiple-choice inline">
                            <label htmlFor="0">Responses</label>
                            <input type="radio" name="arrangeByType" value="0" onChange={filter} checked={value === 0}/>
                        </div>                        
                        <div className="multiple-choice inline">
                            <label htmlFor="1">Questions</label>
                            <input type="radio" name="arrangeByType" value="1" onChange={filter} checked={value === 1}/>
                        </div>
                    </div>
                </fieldset>
            </form>

export default FilterByType
