const model = require("./questionModel")

const formDataSubmission = (req, res) => {
    console.log(model)
    model.find({})
        .then(questions => res.send(questions))
}

module.exports = formDataSubmission