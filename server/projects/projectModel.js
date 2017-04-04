const db = require("../mongo/config")
const mongoose = require("mongoose")

const ProjectSchema = new db.Schema({
    projectName: String, 
    // surveyIds: {
    //     ref: "Surveys"
    // }
})

const ProjectModel = db.model("Project", ProjectSchema)

module.exports = ProjectModel