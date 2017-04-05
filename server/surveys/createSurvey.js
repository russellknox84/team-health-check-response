const Survey = require("./surveyModel")
const Project = require("../projects/projectModel")

const createSurvey = (req, res) => {
    
    const { surveyName, activeProjectId } = req.body
   
    Project.findById(activeProjectId)
        .then(project => {

            const survey = new Survey({
                _id: surveyName,
                surveyName
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