import React from "react"

import "../../../../sass/index.scss"

const FilterByResponse = ({responses}) =>
    <tbody class="filtered-response">
        {responses.map(responses => 
            responses.map(response =>
                <tr>
                    <td>{response.question}</td>                     
                    <td>{response.userResponse}</td>                   
                </tr>  
            )                           
        )}
    </tbody>
    

export default FilterByResponse