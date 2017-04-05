const Project = require("./projectModel")

const getProjects = (req, res) => {

    Project.find({})
        .populate("surveys")
        .then(projects => res.send(projects))
}

module.exports = getProjects