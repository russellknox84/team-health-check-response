const db = require("../mongo/config")
const Schema = require("mongoose").Schema

const SurveySchema = new db.Schema({
    _id: String,
    surveyName: String, 
    questions: [{
        type: String,
        ref: "Questions"
    }]
})

const SurveyModel = db.model("Survey", SurveySchema)

module.exports = SurveyModel