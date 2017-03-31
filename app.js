const express = require("express")
const bodyParser = require("body-parser")

const routes = require("./server/routes")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("./dist"))

routes(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("listening..."))