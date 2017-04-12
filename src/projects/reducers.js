import { combineReducers } from "redux"
import * as types from "./types"


export const addNewProject = (state, action) => {
    return {...state, [action.projectName]: {
        surveysId: []
    }}
}

export const addSurveyIdsToProject = (state, action) => {
    const { surveyName, activeProject, id } = action.payload
        return {...state, 
            [activeProject]: {
                surveysId: [...state[activeProject].surveysId, surveyName]
            }          
        }             
}      

export const projects = (state = {}, action) => {
    switch(action.type) {
        case types.ADD_NEW_PROJECT: return addNewProject(state, action)
        case types.ADD_SURVEY: return addSurveyIdsToProject(state, action)
        default: return state;
    }
}

export const projectIds = (state = [], action) => {
    switch(action.type) {
        case types.ADD_NEW_PROJECT: return [...state, action.projectName ];
        default: return state;
    }
}

export const setActiveProject = (state, projectId) => {
    state = projectId
    return state
}

export const activeProject = (state = "", action) => {
    switch(action.type) {
        case types.SET_ACTIVE_PROJECT: return action.projectId;
        case types.UNSET_ACTIVE_PROJECT: return unsetActiveProject(state, action);
        default: return state;
    }
}

export const unsetActiveProject = (state, action) => {
    return ""
}

export default combineReducers({
    projectIds,
    projects,
    activeProject
})
    