const Survey = require("./surveyModel")

const publishSurvey = (req, res) => {
    
    const { activeSurveyId }  = req.body

    Survey.findById(activeSurveyId)
        .then(survey => {
            survey.published = !survey.published
            survey.save()
            res.send()    
        })
        .catch(err => err )
}

module.exports = publishSurvey