import React from "react"
import * as Types from "./radioQuestion"

import "../../../sass/index.scss"

const Checks = ({match, questions, publishForm, editQuestion, activeQuestion, unsetActiveQuestion}) =>
    <div>
        <div>
            <h2 className="heading-small heading-contents">Questions</h2>
        </div>
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
        </div>             
        <div>
             <button className="button submit-response" onClick={publishForm}>Publish Form</button>
        </div>
    </div>

export default Checks