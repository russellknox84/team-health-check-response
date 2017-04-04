import { combineReducers } from "redux"

const addQuestion = (state, action) => {
    const { questions, activeSurvey } = action
    const { validation, values, type, isMandatory, id, question } = questions
    console.log("questions state", state, action)
    return {...state, 
        [activeSurvey]: [...state[activeSurvey], {
                id, 
                question,
                validation,
                values,
                type,
                isMandatory
    }],  }}


const addSurveyToQuestionLists = (state, action) => {
    const { name } = action.payload
        return {...state, 
            [name]: []        
        }             
}             

// const activeProject = (state = {}, action) => {
//     switch(action.type) {
//         case "ACTIVE_PROJECT": return {...state, id: action.id};
//         default: return state;
//     }
// }

const activeQuestion = (state = "", action) => {
    switch(action.type) {
        case "SET_ACTIVE_QUESTION": return action.questionId;
        case "UNSET_ACTIVE_QUESTION": return "";
        default: return state;
    }
}

const updateQuestion = (state, action) => {
    const { questionId, newQuestionValue, activeSurvey } = action.payload

    const newState = state[activeSurvey].map(question =>{
        if (question.question === questionId) return newQuestionValue
        return question
    })    

    return {...state,
        [activeSurvey]: newState    
    }
}

const questions = (state = {}, action) => {
    switch(action.type) {
        case "ADD_SURVEY": return addSurveyToQuestionLists(state, action)  
        case "ADD_QUESTION": return addQuestion(state, action);  
        case "UPDATE_QUESTION": return updateQuestion(state, action);    
        default: return state;
    }
}

const setActiveQuestionValues = (state, action) => {
    const { id, question, type } = action.values  
    return Object.assign(action.values, { id, question, type })
}

const updateActiveQuestionValues = (state, action) => {
    const { currentValues, question } = action.payload
    const { id, type, validation, values } = currentValues
    return Object.assign({}, { id, type, validation, values, question })
}

const activeQuestionvalues = (state = {}, action) => {
    switch(action.type) {
        case "SET_ACTIVE_QUESTION_VALUES": return setActiveQuestionValues(state, action);
        case "UPDATE_ACTIVE_QUESTION_VALUES": return updateActiveQuestionValues(state, action);
        case "UNSET_ACTIVE_QUESTION_VALUES": return ""      
        default: return state;
    }
}

export default combineReducers({
    activeQuestionvalues,
    activeQuestion,
    questions
})
