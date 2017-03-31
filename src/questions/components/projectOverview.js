import React from "react"
import * as T from "./radioQuestion"

import "../../../sass/index.scss"

const Checks = ({match, data, questions, publishForm, editQuestion}) =>{
    return <div>
        {questions.question.map(question => {
            const Q = T[question.type]
           
            return <div> <Q {...question} editQuestion={editQuestion} /> </div>
        })}
        <div>
             <button className="button submit-response" onClick={publishForm}>Publish Form</button>
        </div>
    </div>
}
export default Checks