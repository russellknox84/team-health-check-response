const SurveyModel = require("../surveys/surveyModel")
const ResultsModel = require("./resultsModel")

const moment = require("moment")

const getResults = (req, res) => {

    const { activeSurveyId } = req.body

    SurveyModel.findById(activeSurveyId)
        .populate("results")
        .lean()
        .then(results => {

        const resultData = results.results

        const formattedData = resultData.map(a => {
            return Object.assign({}, {
                _id: a.id,
                date: moment(a.date).format("DD MMM YYYY"),
                userResponse: a.userResponse
            })
        })
        
        res.send(formattedData)
    })
    .catch(err => console.log(err))
}

module.exports = getResults