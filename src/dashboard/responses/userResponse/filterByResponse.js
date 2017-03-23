import React from "react"

import "../../../../sass/index.scss"

const FilterByResponse = ({responses}) =>
    <div>
    <tbody>
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
    
    </div>

export default FilterByResponse