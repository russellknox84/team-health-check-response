const db = require("../mongo/config")

const QuestionSchema = new db.Schema({
    _id: String,
    id: Number,
    activeSurvey: String,
    date: Date,
    url: String,
    draft: Boolean,
    published: Boolean,
    question: String,
    isMandatory: Boolean,
    values: Array,
    type: String,
    validation: String
})

const model = db.model('Questions', QuestionSchema)

module.exports = model
