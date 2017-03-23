import React from "react"
import FitlerByResponse from "./filterByResponse"
import FitlerByQuestion from "./filterByQuestion"

import "../../../../sass/index.scss"

const Responses = ({responses, type}) =>{
    console.log(type)
    return <div className="column-three-quarter">
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
                { type === "question" ? 
                     <FitlerByQuestion questions={res} /> : 
                     <FitlerByResponse responses={res} />
                }

            </table>            
        })}
    </div> 
}
export default Responses