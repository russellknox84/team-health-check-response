const db = require("../mongo/config")
const Schema = require("mongoose").Schema

const SurveySchema = new db.Schema({
    _id: String,
    id: String,
    surveyName: String, 
    url: String,
    published: Boolean,
    draft: Boolean,
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