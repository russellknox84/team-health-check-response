const db = require("mongoose")


db.Promise = global.Promise

const DB_HOST = process.env.DB_HOST || 'localhost/teamHealthCheck';
const DB_USER = process.env.DB_USER || false;
const DB_PASS = process.env.DB_PASS || false;
var uri;

if(DB_USER && DB_PASS) uri = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}`;
else uri = `mongodb://${DB_HOST}`;

db.connect(uri, (err, cb) => {
    console.log('connected')
})

module.exports = db
