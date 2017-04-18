const QuestionModel = require("./questionModel")
const SurveyModel = require("../surveys/surveyModel")

const updateQuestion = (req, res) => {
    
    const { activeSurvey, activeQuestion, activeQuestionValue } = req.body
    const { id, question, validation, values, type, isMandatory } = activeQuestionValue

    QuestionModel.findById(id)
        .then(questionToUpdate => {
            
        updatedQuestion = Object.assign(questionToUpdate, { 
            question, 
            validation, 
            type, 
            isMandatory, 
            values
        })

        updatedQuestion.save()
        res.send()
    })
    .catch(err => console.log(err))
}

module.exports = updateQuestion