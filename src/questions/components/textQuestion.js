import React from "react"

const TextQuestion = ({addOne}) => 
    <form onSubmit={addOne}>
            <label htmlFor="testQuestion">Free Text Question: </label>
            <input onChange={addOne} type="text" name="question" id="textQuestion"/>
            <input type="checkbox" id="required" name="validation" value="required" />
            <label htmlFor="required">Required</label>
            <input type="checkbox" id="s" name="validation" value="s" />
            <label htmlFor="s">New</label>      
    </form>

export { TextQuestion }