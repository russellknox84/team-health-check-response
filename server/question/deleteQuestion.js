const QuestionModel = require("./questionModel")

const deleteQuestion = (req, res) => {
    const { activeQuestion, activeQuestionValue } = req.body
    const { id } = activeQuestionValue

    QuestionModel.findById(id)
        .then(question => {

            question.remove()
            res.send()
    })
    .catch(err => console.log(err))
}

module.exports = deleteQuestion