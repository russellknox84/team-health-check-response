import { combineReducers } from "redux"

const addProject = (state, action) => {
    const { name, id, url } = action.payload
        return {...state, [action.payload.name]: {
                projectTitle: name,
                id,
                url,
                draft: false,
                published: false,
                question: []
        }}
    }

const addQuestion = (state, action) => {
    const { id, question, validation, type, values, isMandatory } = action.question

    return {...state, [action.activeProject.id]: 
        Object.assign({...state[action.activeProject.id]}, 
            {question: [...state[action.activeProject.id].question, {
                id, 
                question,
                validation,
                values,
                type,
                isMandatory
            }]}) }}


const projects = (state = {}, action) => {
    switch(action.type) {
        case "ADD_PROJECT": return addProject(state, action);
        case "ADD_QUESTION": return addQuestion(state, action);
        default: return state;
    }
}

const addProjectId = (state, action) =>
    [...state, action.payload.name ]   


const projectId = (state = [], action) => {
    switch(action.type) {
        case "ADD_PROJECT": return addProjectId(state, action);
        default: return state;
    }
}

const activeProject = (state = {}, action) => {
    switch(action.type) {
        case "ACTIVE_PROJECT": return {...state, id: action.id};
        default: return state;
    }
}

const setActiveQuestion = (state = "", action) => {
    switch(action.type) {
        case "SET_ACTIVE_QUESTION": return action.questionId;
        default: return state;
    }
}



export default combineReducers({
    projectId,
    projects,
    activeProject,
    setActiveQuestion
})
