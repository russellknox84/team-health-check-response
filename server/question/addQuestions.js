const QuestionModel = require("./questionModel")
const SurveyModel = require("../surveys/surveyModel")

const addQuestions = (req, res) => {

    const { id, question, validation, values, type, isMandatory } = req.body.activeQuestionValues
    const activeSurveyId = req.body.activeSurveyId

    console.log(activeSurveyId)

    SurveyModel.findById(activeSurveyId)
        .then(survey => {
        console.log("the survey", survey)
        const questionValues = new QuestionModel({
            _id: id,
            id: id,
            activeSurvey: question,
            isMandatory: isMandatory,
            date: new Date(),
            values: values,
            type: type,
            validation: validation,
            question: question
        })
        
        survey.questions.push(questionValues)
        
        questionValues.save()
        survey.save()
        res.send()
    })
    .catch(err => console.log(err))
}

module.exports = addQuestions