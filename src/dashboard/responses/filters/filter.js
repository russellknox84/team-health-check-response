import React from "react"

import FilterByDays from "./filterByDays"
import FilterByDate from "./filterByDate"
import DownloadCSV from "./downloadCSV"

const Filters = ({filterByDays, filterByDate, state, initialData}) =>
    <div className="column-quarter">
        <h3 className="heading-medium">Days</h3>
        <FilterByDays filter={filterByDays} value={state.checked}/>
        <h3 className="heading-medium">Dates</h3>
        <FilterByDate filter={filterByDate} />
        <DownloadCSV input={state.initialData} />
    </div>

export default Filters