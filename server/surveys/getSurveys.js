const Survey = require("./surveyModel")

const getSurveys = (req, res) => {

    Survey.find({})
        .populate("questions")
        .then(survey => res.send(survey))
}

module.exports = getSurveys