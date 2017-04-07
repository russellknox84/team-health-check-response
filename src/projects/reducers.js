import { combineReducers } from "redux"


const addNewProject = (state, action) => {
    return {...state, [action.projectName]: {
        surveysId: []
    }}
}

const addSurveyIdsToProject = (state, action) => {
    const { name, activeProject, id, url } = action.payload
        return {...state, 
            [activeProject]: {
                surveysId: [...state[activeProject].surveysId, name]
            }          
        }             
}      

const projects = (state = {}, action) => {
    switch(action.type) {
        case "ADD_NEW_PROJECT": return addNewProject(state, action)
        case "ADD_SURVEY": return addSurveyIdsToProject(state, action)
        default: return state;
    }
}

const projectIds = (state = [], action) => {
    switch(action.type) {
        case "ADD_NEW_PROJECT": return [...state, action.projectName ];
        default: return state;
    }
}

const setActiveProject = (state, projectId) => {
    state = projectId
    return state
}

const activeProject = (state = "", action) => {
    switch(action.type) {
        case "SET_ACTIVE_PROJECT": return action.projectId;
        case "UNSET_ACTIVE_PROJECT": return unsetActiveProject(state, action);
        default: return state;
    }
}

const unsetActiveProject = (state, action) => {
    return ""
}

export default combineReducers({
    projectIds,
    projects,
    activeProject
})
    