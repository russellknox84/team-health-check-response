import { combineReducers } from "redux"
import * as types from "./types"

export const addSurvey = (state, action) => {
    const { name, id, url } = action.payload
        return {...state, [name]: {
                        projectTitle: name,
                        id,
                        url,
                        draft: false,
                        published: false,
                    }
                 }
              }

export const addSurveyId = (state, action) =>
    [...state, action.payload.name ]   


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

export const surveys = (state = {}, action) => {
    switch(action.type) {
        case types.ADD_SURVEY: return addSurvey(state, action);
        default: return state;
    }
}

export default combineReducers({
    surveys,
    surveyIds,
    activeSurvey
})