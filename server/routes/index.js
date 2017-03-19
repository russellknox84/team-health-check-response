const getData = require("../mongo/getData")
const filterData = require("../mongo/filterData")

const routes = (app) => {
    app.post("/health-check-response", getData)
    app.post("/health-check-response/filter-data", filterData)
}

module.exports = routes


