import React from "react"

import "../../../sass/index.scss"

const UserResponses = ({questions}) => 
    <tbody>
        {questions.map(question => 
            <tr>
                <td>{question.question}</td>
                <td>{question.userResponse}</td>
            </tr>               
        )}
    </tbody>

export default UserResponses