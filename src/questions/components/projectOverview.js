import React from "react"
import * as Types from "./radioQuestion"

import "../../../sass/index.scss"

const Checks = ({questions, publishForm, editQuestion, isActiveSurveyPublished}) =>{
    {console.log(questions, "the questions")}
    return <div id="question-list">
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
            {isActiveSurveyPublished ? 
                 <button className="button submit-response" onClick={publishForm}>Unpublish</button>: 
                 <button className="button submit-response" onClick={publishForm}>Publish</button>
            }
             
        </div>
    </div>}

export default Checks