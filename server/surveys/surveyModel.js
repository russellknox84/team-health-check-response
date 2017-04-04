const db = require("../mongo/config")
const mongoose = require("mongoose")

const SurveySchema = new db.Schema({
    surveyName: String, 
    // surveyIds: {
    //     ref: "Surveys"
    // }
})

const SurveyModel = db.model("Survey", SurveySchema)

module.exports = SurveyModel