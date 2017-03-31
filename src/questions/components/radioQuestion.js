import React from "react"

const Radio = ({addOne, question}) => 
    <form onSubmit={addOne}>
            <button className="full-width tab" onClick={addOne} id="radioQuestion">{question}</button>
    </form>

export {Radio}

const Text = ({addOne, question}) => 
    <form onSubmit={addOne}>
            <button className="full-width tab" onClick={addOne} id="textQuestion">{question}</button>
    </form>

export { Text }

const YesNo = ({addOne, question}) => 
    <form onSubmit={addOne}>
            <button className="full-width tab" onClick={addOne} id="yesNoQuestion">{question}</button>
    </form>

export { YesNo }

const Scaled = ({addOne, question}) => 
    <form onSubmit={addOne}>
            <button className="full-width tab" onClick={addOne} id="scaledQuestion">{question}</button>
    </form>

export { Scaled }