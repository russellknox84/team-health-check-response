const QuestionModel = require("./questionModel")
const SurveyModel = require("../surveys/surveyModel")

const createQuestion = (req, res) => {

    const { id, question, validation, values, type, isMandatory } = req.body.formData
    const activeSurvey = req.body.activeSurvey

    SurveyModel.findById(activeSurvey)
        .then(survey => {

        req.body.formData.forEach( question => {
 
            const questionValues = new QuestionModel({
                _id: question.question,
                id: question.id,
                activeSurvey: question.question,
                isMandatory: question.isMandatory,
                date: new Date(),
                values: question.values,
                type: question.type,
                validation: question.validation,
                question: question.question
            })
            
            survey.questions.push(questionValues)
            questionValues.save()
        })

        survey.save()
        res.send()
    })
    .catch(err => console.log(err))
}

module.exports = createQuestion