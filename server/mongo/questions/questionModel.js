const db = require("../config")

const QuestionSchema = new db.Schema({
    id: Number,
    projectTitle: String,
    date: Date,
    url: String,
    draft: Boolean,
    published: Boolean,
    questions: []
})

const model = db.model('questions', QuestionSchema)

module.exports = model