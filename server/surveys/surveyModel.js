const db = require("../mongo/config")
const Schema = require("mongoose").Schema

const SurveySchema = new db.Schema({
    surveyName: String, 
    questions: {
        type: Schema.Types.ObjectId,
        ref: "Questions"
    }
})

const SurveyModel = db.model("Survey", SurveySchema)

module.exports = SurveyModel