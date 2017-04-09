import { combineReducers } from "redux"

import * as types from "./types"

const addQuestion = (state, action) => {
    const { questions, activeSurvey } = action
    const { validation, values, type, isMandatory, id, question } = questions

    return {...state, 
        [activeSurvey]: [
            ...state[activeSurvey], {
                id, 
                question,
                validation,
                values,
                type,
                isMandatory,
                activeSurvey
            }
        ]  
    }
}

const addSurveyToQuestionLists = (state, action) => {
    const { name } = action.payload
        return {...state, 
            [name]: []        
        }             
}             

const activeQuestion = (state = "", action) => {
    switch(action.type) {
        case types.SET_ACTIVE_QUESTION: return action.questionId;
        case types.UNSET_ACTIVE_QUESTION: return "";
        default: return state;
    }
}

const updateQuestion = (state, action) => {

    const { 
        activeQuestion, 
        newQuestionValue, 
        activeSurvey 
    } = action.payload

    const newState = state[activeSurvey].map(question =>{
        if (question.question === activeQuestion) return newQuestionValue
        return question
    })    

    return {...state,
        [activeSurvey]: newState    
    }
}

const deleteQuestion = (state, action) => {
    const { activeSurvey, activeQuestion } = action.payload

    const newValues = state[activeSurvey].filter(question => {
        if (question.question === activeQuestion) return
        return question
    })

    return {...state, 
        [activeSurvey]: newValues 
    }
}

const questions = (state = [], action) => {
    switch(action.type) {
        case types.ADD_SURVEY: return addSurveyToQuestionLists(state, action)  
        case types.ADD_QUESTION: return addQuestion(state, action);  
        case types.DELETE_QUESTION: return deleteQuestion(state, action);
        case types.UPDATE_QUESTION: return updateQuestion(state, action);    
        default: return state;
    }
}

const setActiveQuestionValues = (state, action) => {
    const { id, question, type } = action.values  
    return Object.assign(action.values, { id, question, type })
}

const updateActiveQuestionValues = (state, action) => {
    const currentValues = action.currentValues
    
    const newValues = Object.keys(action.payload).reduce((acc, values) => {
        return Object.assign(acc, { [`${values}`]: action.payload[values] })
    }, {})

    return Object.assign({}, currentValues, newValues)
}

const unsetActiveState = (state, action) => {
    return {
        id: "",
        question: "",
        type: "",
        validation: "",
        values: ""
    }
}

const activeQuestionvalues = (state = {}, action) => {
    switch(action.type) {
        case types.SET_ACTIVE_QUESTION_VALUES: return setActiveQuestionValues(state, action);
        case types.UPDATE_ACTIVE_QUESTION_VALUES: return updateActiveQuestionValues(state, action);
        case types.UNSET_ACTIVE_QUESTION_VALUES: return unsetActiveState(state, action);  
        default: return state;
    }
}

export default combineReducers({
    activeQuestionvalues,
    activeQuestion,
    questions
})
