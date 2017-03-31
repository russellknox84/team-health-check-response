import React from "react"
import FilterByResponse from "./filterByResponse"
import FilterByQuestion from "./filterByQuestion"

import "../../../../sass/index.scss"

const Responses = ({responses, type}) =>{
    return <div className="column-three-quarter">
        <h3 className="heading-medium">Responses</h3>
     
        {Object.keys(responses).map( resp => {
            const res = responses[resp]
            return <table className="user-response">
                <caption>{resp}</caption>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Response</th>
                    </tr>
                </thead>
                { type === "questions" ? 
                     <FilterByQuestion questions={res} /> : 
                     <FilterByResponse responses={res} />
                }

            </table>            
        })}
    </div> 
}
export default Responses