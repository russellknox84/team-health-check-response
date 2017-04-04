import React from "react"
import * as Types from "./radioQuestion"

import "../../../sass/index.scss"

const Checks = ({match, questions, publishForm, editQuestion, activeQuestion, unsetActiveQuestion}) =>
    <div>
        {questions.map(question => {
            const QuestionsTypes = Types[question.type]
           
            return (
                <div> 
                    <QuestionsTypes 
                        {...question} 
                        editQuestion={editQuestion} 
                     />
                 </div>
            )
        })}
       
        {activeQuestion ?
            <button className="full-width tab-button" 
                    onClick={(e) => unsetActiveQuestion(e)}  
                    id="addMoreQuestions">Add more questions
            </button>  :  null
        }                 
        <div>
             <button className="button submit-response" onClick={publishForm}>Publish Form</button>
        </div>
    </div>

export default Checks