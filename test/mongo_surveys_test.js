const db = require("mongoose")
const model = require('../server/surveys/surveyModel')
const { expect } = require("chai")


db.Promise = global.Promise

after(function (done) {
     db.connection.db.dropDatabase(() => {
          done()
    })
})

describe("a new survey is persisted into databse", () =>{

        before((done) => {
            survey = new model({
                surveyName: "Survey One",
                _id: "1234",
                id: "1234",
                published: false
            })  
            done()     
        })
        it("should sucessfull save data into db", (done) => {
             survey.save()
                .then(data => {
                    expect(data)
                    done()
                })         
        })
        it("should persit new survey into databse", (done) => {
            model.find({surveyName: "Survey One"})
                .then(data => {
                    expect(data[0].surveyName).to.deep.equal("Survey One")
                    expect(data[0].id).to.deep.equal("1234")
                    expect(data[0]._id).to.deep.equal("1234")
                    expect(data[0].published).to.deep.equal(false)
                    done()
                })
        })
        it("should change published flag from false to true", (done) => {
            model.find({surveyName: "Survey One"})
                .then(data => {
                    data.published = !data.published
                    done()
                })
            model.find({surveyName: "Survey One"})
                .then(data => {
                    expect(data[0].projectName).to.deep.equal("Survey One")
                    expect(data[0]._id).to.deep.equal("1234")
                    expect(data[0].published).to.deep.equal(true)
                    done()
                })
        })
})
