import React from "react"
import * as T from "./radioQuestion"

import "../../../sass/index.scss"

const Checks = ({match, data, questions, publishForm}) =>{
    return <div>
        {questions.question.map(question => {
            const Q = T[question.type]
           
          return <div> <Q {...question} /> </div>
        })}
        <div>
             <button className="submit-response" onClick={publishForm}>PUBLISH FORM</button>
        </div>
    </div>
}
export default Checks