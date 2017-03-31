import React from "react"

import "../../../../sass/index.scss"

const FilterByQuestion = ({questions}) =>
   <tbody class="filtered-question">
        {questions.map(question => 
            <tr>
                <td>{question.date}</td>
                <td>{question.userResponse}</td>
            </tr>                       
        )}
    </tbody>
export default FilterByQuestion