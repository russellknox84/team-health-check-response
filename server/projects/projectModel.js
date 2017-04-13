const db = require("../mongo/config")
const SurveySchema = require("../surveys/surveyModel")
const Schema = require("mongoose").Schema

const ProjectSchema = new db.Schema({
    _id: String,
    projectName: String, 
    surveys: [{
        type: String,
        ref: "Survey"
    }],
})

const ProjectModel = db.model("Project", ProjectSchema)

module.exports = ProjectModel