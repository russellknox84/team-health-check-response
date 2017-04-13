const Survey = require("./surveyModel")
const Project = require("../projects/projectModel")

const createSurvey = (req, res) => {

    const { id, surveyName, published, url, activeProject, draft } = req.body.survey

    Project.findById(activeProject)
        .then(project => {

            const survey = new Survey({
                _id: id,
                surveyName,
                published,
                url,
                draft
            })
            
            project.test = surveyName
            project.surveys.push(survey)
            
            project.save()
            survey.save()
            res.send()
    
        })
        .catch(err => err )
}

module.exports = createSurvey