import React from "react"
import * as T from "./radioQuestion"

import "../../../sass/index.scss"

const Checks = ({match, data, questions, publishForm, editQuestion, activeQuestion, unsetActiveQuestion}) =>{
    return <div>
        {questions.question.map(question => {
            const Q = T[question.type]
           
            return <div> <Q {...question} editQuestion={editQuestion} /> </div>
        })}
        {activeQuestion ?
            <button className="full-width tab-button" onClick={(e) => unsetActiveQuestion(e)}  id="addMoreQuestions">Add more questions</button>  :
            ""
        }                 
        <div>
             <button className="button submit-response" onClick={publishForm}>Publish Form</button>
        </div>
    </div>
}
export default Checks