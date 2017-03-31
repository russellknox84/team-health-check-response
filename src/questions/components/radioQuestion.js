import React from "react"

const Radio = ({addOne, question}) => 
    <form onSubmit={addOne}>
            <input onChange={addOne} type="text" name="question" id="radioQuestion" value={question}/>
     
    </form>

export {Radio}

const Text = ({addOne, question}) => 
    <form onSubmit={addOne}>
            <input onChange={addOne} type="text" name="question" id="textQuestion" value={question}/>    
    </form>

export { Text }