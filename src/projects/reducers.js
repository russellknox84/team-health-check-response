import { combineReducers } from "redux"


const addNewProject = (state, action) => {
    console.log(action, "new action,,,,,,")
    return {...state, [action.projectName]: {
        surveysId: []
    }}
}

// const tempProjectStructure = {
//         ["Team 1"]: {
//             surveysId: ["Team Health Check", "create-new-project"]
//         },
//         ["Team 2"]: {
//             surveysId: ["New Project", "Team Health Check"]
//         }
//     }

const addSurveyIdsToProject = (state, action) => {
    const { name, activeProject, id, url } = action.payload
    console.log("actions=-=-=-=-=-s=df-=sd-f=-sdf", action)
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
        default: return state;
    }
}

export default combineReducers({
    projectIds,
    projects,
    activeProject
})
    