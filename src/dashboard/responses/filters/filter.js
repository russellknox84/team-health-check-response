import React from "react"

import FilterByDays from "./filterByDays"
import FilterByDate from "./filterByDate"
import FilterByType from "./filterByType"
import DownloadCSV from "./downloadCSV"

import "../../../../sass/index.scss"

const Filters = ({filterByDays, filterByDate, state, initialData, displayType}) =>
    <div className="column-quarter">
    <h3 className="heading-medium">Filters</h3>
        <div className="filter-group">
            <h3 className="heading-small">Type</h3>
            <FilterByType filter={displayType} value={state.type} />
        </div>
        <div className="filter-group">
            <h3 className="heading-small">Number of days</h3>
            <FilterByDays filter={filterByDays} value={state.checked}/>
        </div>
        <div className="filter-group">
            <h3 className="heading-small">Date range</h3>
            <FilterByDate filter={filterByDate} />
        </div>
        <DownloadCSV input={state.initialData} />
    </div>

export default Filters