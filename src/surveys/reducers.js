import { combineReducers } from "redux"
import * as types from "./types"

export const addSurvey = (state, action) => {
    console.log(action, "the actions..")
    const { surveyName, id, url, published } = action.payload
        return {...state, [surveyName]: {
                        surveyName,
                        id,
                        _id: id,
                        url,
                        published,
                    }
                 }
              }

export const addSurveyId = (state, action) =>{
    return [...state, action.payload.surveyName ]   
}

export const surveyIds = (state = [], action) => {
    switch(action.type) {
        case types.ADD_SURVEY: return addSurveyId(state, action);
        default: return state;
    }
}

export const activeSurvey = (state = "", action) => {
    switch(action.type) {
        case types.SET_ACTIVE_SURVEY: return action.surveyName;
        case types.UNSET_ACTIVE_SURVEY: return unsetActiveSurvey(state, action);
        default: return state;
    }
}

export const unsetActiveSurvey = (state, action) => {
    return ""
}

const publishSurvey = (state, action) => {
    console.log("reach ehrer", action)
    return {...state, 
        [action.payload]: {
            ...state[action.payload],
            published: !state[action.payload].published
        }
    }
}

export const surveys = (state = {}, action) => {
    switch(action.type) {
        case types.ADD_SURVEY: return addSurvey(state, action);
        case "PUBLISH_SURVEY": return publishSurvey(state, action); 
        default: return state;
    }
}

export default combineReducers({
    surveys,
    surveyIds,
    activeSurvey
})