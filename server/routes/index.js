// Response filters
const getData = require("../results/getResults")
const getDays = require("../results/getResultsByDay")
//const filterData = require("../mongo/filterData")
//const formDataSubmission = require("../mongo/questions/formDataSubmission")
const getQuestions = require("../mongo/questions/getQuestions")

const getProjects = require("../projects/getProjects")
const createProject = require("../projects/createProject")
//const findProject = require("../projects/findProject")

const getSurveys = require("../surveys/getSurveys")
const createSurvey = require("../surveys/createSurvey")
const publishSurvey = require(("../surveys/publishSurvey"))

const addQuestions = require("../question/addQuestions")
const createQuestions = require("../question/createQuestions")
const updateQuestions = require("../question/updateQuestion")
const deleteQuestions = require("../question/deleteQuestion")


const routes = (app) => {

    //app.post("/form-data-submission", formDataSubmission) 
    app.post("/health-check-response", getData)
    app.post("/health-check-response/filter-days", getDays)
    //app.post("/health-check-response/filter-date", filterData)
    app.get("/api/questions", getQuestions)
    app.get("/api/projects", getProjects)
    app.get("/api/surveys", getSurveys)
    app.post("/api/question/add", addQuestions)
    app.put("/api/question/update", updateQuestions)
    app.put("/api/question/delete", deleteQuestions)
    app.post("/api/project/createQuestion", createQuestions)
    app.put("/api/survey/publishSurvey", publishSurvey)
    app.post("/api/project/createSurvey", createSurvey)
    app.post("/api/project/createProject", createProject)
    //app.put("/api/project/findProject", findProject)
}

module.exports = routes


