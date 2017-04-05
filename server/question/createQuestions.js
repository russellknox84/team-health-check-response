const QuestionModel = require("./questionModel")
const SurveyModel = require("../surveys/surveyModel")

const createQuestion = (req, res) => {
    const { id, question, validation, values, type, isMandatory, activeSurvey } = req.body.formData[0]
    console.log(req.body.formData[0])
    SurveyModel.findById(activeSurvey)
        .then(survey => {
        console.log("the surveys....", survey)
        const questionValues = new QuestionModel({
            _id: question,
            id,
            projectTitle: question,
            date: new Date(),
            // url: String,
            // draft: Boolean,
            // published: Boolean,
            questions: question
        })
        
        survey.questions.push(questionValues)

        survey.save()
        questionValues.save()
        res.send()
    })
    .catch(err => console.log(err))



}

module.exports = createQuestion