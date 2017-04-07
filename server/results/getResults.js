const SurveyModel = require("../surveys/surveyModel")
const ResultsModel = require("./resultsModel")

const getResults = (req, res) => {

    // const { id, question, validation, values, type, isMandatory } = req.body.formData
    const activeSurvey = req.body.activeSurvey

    SurveyModel.findById(activeSurvey)
        .populate("results")
        .lean()
        .then(results => {

        const resultData = results.results

         res.send(resultData)
    })
    .catch(err => console.log(err))
}

module.exports = getResults