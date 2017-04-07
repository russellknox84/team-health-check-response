const db = require("../mongo/config")

const ResultsSchema = new db.Schema({
    _id: String,
    date: {type: Date, required: true}, 
    userResponse: {type: Array, required: true}
})

const model = db.model('Results', ResultsSchema)

module.exports = model
