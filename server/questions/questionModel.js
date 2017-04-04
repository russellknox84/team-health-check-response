const db = require("../mongo/questions/config")

const QuestionSchema = new db.Schema({
    project: String,
    survey: String,
    title: String, 
    type: String,
    values: {},

})

const ProjectSchema = new db.Schema({
    project: String, 
    surveyIds: []
})

const SurveySchema = new db.Schema({
    title: String, 
    type: String,
    questionIds: []  
})