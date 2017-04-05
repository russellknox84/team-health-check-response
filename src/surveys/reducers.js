import { combineReducers } from "redux"

const addSurvey = (state, action) => {
    const { name, activeProject, id, url } = action.payload
        console.log("the state", state)
        return {...state, [name]: {
                        projectTitle: name,
                        id,
                        url,
                        draft: false,
                        published: false,
                    }
                 }
              }

const addSurveyId = (state, action) =>
    [...state, action.payload.name ]   


const surveyIds = (state = [], action) => {
    switch(action.type) {
        case "ADD_SURVEY": return addSurveyId(state, action);
        default: return state;
    }
}

const activeSurvey = (state = "", action) => {
    switch(action.type) {
        case "SET_ACTIVE_SURVEY": return action.surveyName;
        default: return state;
    }
}

// const surveys = (state = {}, action) =>{
//     switch(action.type){
//         case "ADD_NEW_SURVEY": return [];
//         default: return state;
//     }
// }

const surveys = (state = {}, action) => {
    switch(action.type) {
        case "ADD_SURVEY": return addSurvey(state, action);
        default: return state;
    }
}

export default combineReducers({
    surveys,
    surveyIds,
    activeSurvey
})