export const activeProject = (state) => 
    state.project.activeProject

export const surveyList = (state) => 
    state.project.projects[activeProject(state)].surveysId