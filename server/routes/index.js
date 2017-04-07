const getData = require("../results/getResults")
const filterData = require("../mongo/filterData")
const formDataSubmission = require("../mongo/questions/formDataSubmission")
const getQuestions = require("../mongo/questions/getQuestions")
const createProject = require("../projects/createProject")
const findProject = require("../projects/findProject")
const createSurvey = require("../surveys/createSurvey")
const createQuestions = require("../question/createQuestions")
const getProjects = require("../projects/getProjects")
const getSurveys = require("../surveys/getSurveys")
const routes = (app) => {

    app.post("/form-data-submission", formDataSubmission)
    
    app.post("/health-check-response", getData)
    app.post("/health-check-response/filter-date", filterData)
    
    app.get("/api/questions", getQuestions)
    app.get("/api/projects", getProjects)
    app.get("/api/surveys", getSurveys)
    app.post("/api/project/createQuestion", createQuestions)
    app.post("/api/project/createSurvey", createSurvey)
    app.post("/api/project/createProject", createProject)
    app.put("/api/project/findProject", findProject)
}

module.exports = routes


