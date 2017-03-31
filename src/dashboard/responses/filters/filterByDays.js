import React from "react"

import "../../../../sass/index.scss"

const FilterByDays = ({filter, value}) =>
            <form>
                <fieldset>
                    <div className="form-group">
                        <div className="multiple-choice inline">
                            <input onChange={filter} checked={value === 3} type="radio" name="filterByDays" value="3" />
                            <label htmlFor="3">3</label>
                        </div>
                        <div className="multiple-choice inline">
                            <input onChange={filter} checked={value === 5} type="radio" name="filterByDays" value="5" />
                            <label htmlFor="5">5</label>
                        </div>
                        <div className="multiple-choice inline">
                            <input onChange={filter} checked={value === 7} type="radio" name="filterByDays" value="7" />
                            <label htmlFor="7">7</label>
                        </div>
                    </div>
                </fieldset>
            </form>

export default FilterByDays