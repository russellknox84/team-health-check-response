const db = require("../mongo/config")

const QuestionSchema = new db.Schema({
    _id: String,
    id: Number,
    projectTitle: String,
    date: Date,
    url: String,
    draft: Boolean,
    published: Boolean,
})

const model = db.model('Questions', QuestionSchema)

module.exports = model
