import { combineReducers } from "redux"


const addNewProject = (state) => {
    return {...state, ["new"]: {
        
    }}
}

const tempProjectStructure = {
        ["Team 1"]: {
            surveysId: ["Team Health Check", "create-new-project"]
        },
        ["Team 2"]: {
            surveysId: ["New Project", "Team Health Check"]
        }
    }

const addSurveyIdsToProject = (state, action) => {
    const { name, activeProject, id, url } = action.payload
        return {...state, 
            [activeProject]: {
                surveysId: [...state[activeProject].surveysId, name]
            }          
        }             
}      

const projects = (state = tempProjectStructure, action) => {
    switch(action.type) {
        case "ADD_NEW_PROJECT": return addNewProject(state)
        case "ADD_SURVEY": return addSurveyIdsToProject(state, action)
        default: return state;
    }
}

const projectIds = (state = ["Team 1", "Team 2"], action) => {
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
        default: return state;
    }
}

export default combineReducers({
    projectIds,
    projects,
    activeProject
})
    