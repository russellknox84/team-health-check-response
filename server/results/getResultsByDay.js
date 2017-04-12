const SurveyModel = require("../surveys/surveyModel")
const ResultsModel = require("./resultsModel")
const moment = require("moment")

const getResults = (req, res) => {

    const days = req.body.filterByDays || 7
    const { activeSurveyId } = req.body

    SurveyModel.findById(activeSurveyId)
        .populate("results")
        .lean()
        .then(results => {

        const resp = results.results.filter(response =>
            response.date > moment().subtract(days, 'days')
        )
        .map(input => Object.assign({}, 
                 {date: moment(input.date).format("DD MMM YYYY")},
                 {userResponse: input.userResponse})
          )

        res.send(resp)        
    })
    .catch(err => console.log(err))
}

module.exports = getResults