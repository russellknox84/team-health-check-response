const responseModel = require("./response-model")
const moment = require("moment")



const getData = (req, res) => {

    const days = req.body.filterByDays || 7

    responseModel.find({})
        .where('date').gt(moment().subtract(days, 'days'))
        .sort('date')
        .then(resp =>
            resp.map((input) =>           
                 Object.assign({}, 
                 {date: moment(input.date).format("DD MMM YYYY")},
                 {userResponse: input.userResponse})
          )
        )
        .then(resp => res.send(resp))
        .catch(err => "df")
}

module.exports = getData