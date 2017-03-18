const express = require("express")
const db = require("mongoose")
const moment = require("moment")
const bodyParser = require("body-parser")

db.Promise = global.Promise

db.connect("localhost/teamHealthCheck", (err, cb) => {
    console.log('connected')
})

const HeathDataSchema = new db.Schema({
    date: {type: Date, required: true}, 
    userResponse: {type: Array, required: true}
})
const model = db.model("HealthData", HeathDataSchema)

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const getData = (req, res) => {

    const days = 7

    model.find({})
        .where('date').gt(moment().subtract(days, 'days'))
        .then(resp =>
            resp.map((input) =>           
                 Object.assign({}, 
                 {date: moment(input.date).format("DD MMM YYYY")},
                 {userResponse: input.userResponse})
          )
        )
        .then(resp => res.send(resp))
        .catch(err => console.log)
}

const filterData = (req, res) => {
    const {fromDate, toDate} = req.body
    console.log(moment(fromDate))
    model.find({})
        .where('date')
            .gt(moment(fromDate).format("DD MMM YYYY"))
            .lt(moment(toDate).format("DD MMM YYYY"))
        .then(resp =>
            resp.map((input) =>           
                 Object.assign({}, 
                 {date: moment(input.date).format("DD MMM YYYY")},
                 {userResponse: input.userResponse})
          )
        )
        .then(resp => res.send(resp))
        .catch(err => console.log)
}

app.use(express.static("./dist"))

app.get("/health-check-response", getData)
app.post("/health-check-response/filter-data", filterData)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("listening..."))