const Project = require("./projectModel")

const createProject = (req, res) => {

    const { projectName } = req.body

    const project = new Project({
        projectName
    })

    project.save()
        .then(project => res.send())
}

module.exports = createProject