const moment = require("moment")
const responseModel = require("./response-model")

const filterData = (req, res) => {
    const {fromDate, toDate} = req.body

    responseModel.find({})
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
        .catch(err => console.log(err))
}

module.exports = filterData