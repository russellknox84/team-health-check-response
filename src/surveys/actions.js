import * as types from "./types"

export const addNewSurvey = (input) => {
    return {
        type: types.ADD_SURVEY, 
        payload: input
    }
}
export const setActiveSurvey = (surveyName) => ({
    type: types.SET_ACTIVE_SURVEY, 
    surveyName
})

export const unsetActiveSurvey = () => ({
    type: types.UNSET_ACTIVE_SURVEY
})

export const unsetActiveQuestion = () => ({
    type: types.UNSET_ACTIVE_QUESTION
})