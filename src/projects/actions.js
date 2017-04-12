import * as types from "./types"

export const addNewProject = (projectName) => ({
    type: types.ADD_NEW_PROJECT, 
    projectName 
})

export const setActiveProject = (projectId) => ({
    type: types.SET_ACTIVE_PROJECT, 
    projectId 
})

export const unsetActiveProject = () => ({
    type: types.UNSET_ACTIVE_PROJECT
})

export const unsetActiveSurvey = () => ({
    type: types.UNSET_ACTIVE_SURVEY
})

export const unsetActiveQuestion = () => ({
    type: types.UNSET_ACTIVE_QUESTION
})

export const addSurvey = (input) => ({
    type: types.ADD_SURVEY, 
    payload: input
})