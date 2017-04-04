const Survey = require("./surveyModel")

const createSurvey = (req, res) => {

    const { surveyName } = req.body

    const survey = new Survey({
        surveyName
    })

    survey.save()
        .then(survey => res.send())
}

module.exports = createSurvey