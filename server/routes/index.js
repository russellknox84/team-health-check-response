const getData = require("../mongo/getData")
const filterData = require("../mongo/filterData")
const formDataSubmission = require("../mongo/questions/formDataSubmission")
const getQuestions = require("../mongo/questions/getQuestions")
const createProject = require("../projects/createProject")
const findProject = require("../projects/findProject")
const createSurvey = require("../surveys/createSurvey")
const routes = (app) => {

    app.post("/form-data-submission", formDataSubmission)
    app.post("/health-check-response", getData)
    app.post("/health-check-response/filter-date", filterData)
    app.get("/questions", getQuestions)

    app.post("/api/project/createsurvey", createSurvey)
    app.post("/api/project/createProject", createProject)
    app.put("/api/project/findProject", findProject)
}

module.exports = routes


