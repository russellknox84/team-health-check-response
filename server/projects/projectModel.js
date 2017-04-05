const db = require("../mongo/config")
const SurveySchema = require("../surveys/surveyModel")
const Schema = require("mongoose").Schema

const ProjectSchema = new db.Schema({
    projectName: String, 
    surveys: {
        type: Schema.Types.ObjectId,
        ref: "Survey"
    },
    test: String
})

const ProjectModel = db.model("Project", ProjectSchema)

module.exports = ProjectModel