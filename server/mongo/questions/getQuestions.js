const model = require("./questionModel")

const formDataSubmission = (req, res) => {
    model.find({})
        .then(questions => res.send(questions))
}

module.exports = formDataSubmission