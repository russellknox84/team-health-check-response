import React from "react"

import "../../../../sass/index.scss"

const FilterByResponse = ({responses}) =>
    <tbody class="filtered-response">
        {responses.map(response =>          
        <tr>
            {response.map(a =>
            <tr>
                <td>{a.question}</td>                     
                <td>{a.userResponse}</td>                   
            </tr>              
            )}
            <hr />
        </tr>                 
    )}
    </tbody>
    

export default FilterByResponse