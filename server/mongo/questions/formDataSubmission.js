const model = require("./questionModel")

const formDataSubmission = (req, res) => {
    const form = req.body.formData
    console.log(form.question)
    const formData = new model({
        projectTitle: form.projectTitle,
        date: new Date(),
        draft: form.draft,
        url: form.url,
        published: form.published,
        questions: form.question
    })

    formData.save(() => res.send("qwerty"))
}

module.exports = formDataSubmission