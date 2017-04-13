export const activeQuestionValues = state =>
    state.questions.activeQuestionvalues

export const activeSurvey = state => 
    state.surveys.activeSurvey

export const activeQuestion = state => 
    state.questions.activeQuestion

export const activeSurveysQuestions = state =>
    state.questions.questions[state.surveys.activeSurvey]

export const activeProjectsSurveys = state =>
    state.project.projects[state.surveys.activeSurvey]

export const activeSurveyId = state =>
    state.surveys.surveys[activeSurvey(state)]._id

export const isActiveSurveyPublished = (state) => 
    state.surveys.surveys[activeSurvey(state)].published

export const isSurveyDraft = (state) => 
    state.surveys.surveys[activeSurvey(state)].draft