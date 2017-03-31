import React from "react"

const Radio = ({addOne, question, editQuestion}) => 
    <form>
            <button className="full-width tab" onClick={(e) => editQuestion(e, question)} id="radioQuestion">{question}</button>
    </form>

export {Radio}

const Text = ({addOne, question, editQuestion}) => 
    <form>
            <button className="full-width tab" onClick={(e) => editQuestion(e, question)} id="textQuestion">{question}</button>
    </form>

export { Text }

const YesNo = ({addOne, question, editQuestion}) => 
    <form>
            <button className="full-width tab" onClick={(e) => editQuestion(e, question)} id="yesNoQuestion">{question}</button>
    </form>

export { YesNo }

const Scaled = ({addOne, question, editQuestion}) => 
    <form>
            <button className="full-width tab" onClick={(e) => editQuestion(e, question)} id="scaledQuestion">{question}</button>
    </form>

export { Scaled }