const db = require("mongoose")
const model = require('../server/projects/projectModel')
const { expect } = require("chai")

const createProject = require('../server/projects/createProject')

db.Promise = global.Promise

after(function (done) {
     db.connection.collections.healthdatas.drop(() => {
          done()
    })

})

describe("a new project is persisted into databse", () =>{

        beforeEach((done) => {
            project = new model({
                projectName: "Project One",
                id: "1234"
            })  
            done()     
        })
        it("should sucessfull save data into db", (done) => {
             project.save()
                .then(data => {
                    expect(data)
                    done()
                })         
        })
        it("should validate date has been sent and stored successfully", (done) => {
            model.find({projectName: "Project One"})
                .then(data => {
                    expect(data[0].projectName).to.deep.equal("Project One")
                    expect(data[0].id).to.deep.equal("1234")
                    done()
                })
        })
})
