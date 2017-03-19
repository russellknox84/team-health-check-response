import React from "react"

import "../../../sass/index.scss"

const FilterByDays = ({filter}) =>
            <form class="form-froup">
                <fieldset class="inline">
                    <label>
                        <input  onChange={filter} type="radio" name="filterByDays" value="3" />
                        <span>3</span>
                    </label>
                    <label>
                        <input  onChange={filter} type="radio" name="filterByDays" value="5" />
                        <span>5</span>
                    </label>
                    <label>
                        <input  onChange={filter} type="radio" name="filterByDays" value="7" />
                        <span>7</span>
                    </label>
                </fieldset>
            </form>

export default FilterByDays
