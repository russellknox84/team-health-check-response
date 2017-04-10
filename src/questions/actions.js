import * as types from "./types"

export const onQuestionUpdate = (payload, currentValues) => ({
    type: types.UPDATE_ACTIVE_QUESTION_VALUES, 
    payload, 
    currentValues
})

export const deleteQuestion = (payload) => ({
    type: types.DELETE_QUESTION, 
    payload
})

export const unsetActiveQuestionValues = () => ({
    type: types.UNSET_ACTIVE_QUESTION_VALUES
})

export const unsetActiveQuestion = () => ({
    type: types.UNSET_ACTIVE_QUESTION
})

export const addQuestion = (activeSurvey, questions) => ({
    type: types.ADD_QUESTION, 
    activeSurvey,
    questions
})

export const setActiveQuestion = (questionId) => ({
    type: types.SET_ACTIVE_QUESTION, 
    questionId
})

export const setQuestionValues = (values) => ({
    type: types.SET_ACTIVE_QUESTION_VALUES, 
    values
})

export const updateQuestion = (payload) => ({
    type: types.UPDATE_QUESTION, 
    payload
})