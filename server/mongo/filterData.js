// const moment = require("moment")
// const responseModel = require("./response-model")

// const filterData = (req, res) => {
//     const {fromDate, toDate} = req.body

//     const reverseDateFormat = (date) => date.split(/[-/]/).reverse().join('-');

//     responseModel.find({})
//         .where('date')
//             .gt(moment(reverseDateFormat(fromDate)).format("DD MMM YYYY"))
//             .lt(moment(reverseDateFormat(toDate)).add(1, "days").format("DD MMM YYYY"))
//         .sort('date')
//         .then(resp =>
//             resp.map((input) =>           
//                  Object.assign({}, 
//                  {date: moment(input.date).format("DD MMM YYYY")},
//                  {userResponse: input.userResponse})
//           )
//         )
//         .then(resp => res.send(resp))
//         .catch(err => 'dsf')
// }

// module.exports = filterData