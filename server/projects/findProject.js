const Project = require("./projectModel")

const findProject = (req, res) => {

    const { projectName } = "sdf"

    // const project = new Project({
    //     projectName
    // })
//     console.log("did I reach jere.")
//     MyModel.update({ name: 'Tobi' }, { ferret: true }, { multi: true }, function (err, raw) {
//   if (err) return handleError(err);
//   console.log('The raw response from Mongo was ', raw);
// });
    Project.findById("58e13030c8fb3e2df3855836")
        .then(project => {
            
            project.test = "Dragon Fruit"
            res.send(project)
        })

    // project.save()
    //     .then(project => res.send())
}

module.exports = findProject