const db = require("../mongo/config")
const Schema = require("mongoose").Schema

const SurveySchema = new db.Schema({
    _id: String,
    surveyName: String, 
    url: String,
    published: Boolean,
    questions: [{
        type: String,
        ref: "Questions"
    }],
    results: [{
        type: String,
        ref: "Results"
    }],

})

const SurveyModel = db.model("Survey", SurveySchema)

module.exports = SurveyModel