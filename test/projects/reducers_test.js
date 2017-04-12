import { expect } from "chai"

import * as reducers from "../../src/projects/reducers"
import * as actions from "../../src/projects/actions"

describe("Projects reducers", () => {

    it("should return an empty {} as inital state for surveys", () => {
        const actual = reducers.projects(undefined, {})
        
        expect(actual).to.deep.equal({})
    })

    it("should handle ADD_NEW_PROJECT and create new survey namespace", () => {
        const payload = "ProjectName-ONE"          
    

        const actual = reducers.projects({
            ["ProjectName-TWO"]: {
                surveysId: []
            }
        }, actions.addNewProject(payload))

        const expected = {
            ["ProjectName-TWO"]: {
                surveysId: []
            },
            ["ProjectName-ONE"]: {
               surveysId: []
            }         
        }
        
        expect(actual).to.deep.equal(expected)
    })
    it("should handle ADD_SURVEY and create new surveyID", () => {

        const payload = {
            surveyName: "SurveyName-ONE",
            activeProject: "ProjectName-ONE"
        }

        const actual = reducers.projects({
            ["ProjectName-TWO"]: {
                surveysId: ["SurveyName-TWO"]
            },
            ["ProjectName-ONE"]: {
               surveysId: []
            }  
        }, actions.addSurvey(payload))

        const expected = {
            ["ProjectName-TWO"]: {
                surveysId: ["SurveyName-TWO"]
            },
            ["ProjectName-ONE"]: {
               surveysId: ["SurveyName-ONE"]
            }         
        }
        
        expect(actual).to.deep.equal(expected)
    })
    it("should return an empty [] as inital state for surveyIds", () => {
        const actual = reducers.projectIds(undefined, [])
        
        expect(actual).to.deep.equal([])
    })

    // it("should handle ADD_NEW_PROJECT and create new project survey list", () => {

    //     const payload = {
    //             surveyName: "SurveyName-TWO"
    //         }

    //     const actual = reducers.projectIds(["SurveyName-ONE"], actions.addSurvey(payload))

    //     const expected = ["SurveyName-ONE", "SurveyName-TWO"]   
        
    //     expect(actual).to.deep.equal(expected)

    // })

    // it("should return an empty '' as inital state for active survey", () => {
    //     const actual = reducers.activeSurvey(undefined, {})
        
    //     expect(actual).to.deep.equal("")
    // })

    // it("should handle SET_ACTVE_SURVEY and return string with active survey id", () => {

    //     const surveyName = "SurveyName-ONE"

    //     const actual = reducers.activeSurvey("SurveyName-TWO", actions.setActiveSurvey(surveyName))

    //     const expected = "SurveyName-ONE"
        
    //     expect(actual).to.deep.equal(expected)
    // })

    // it("should handle UNSET_ACTVE_SURVEY and return and empty string", () => {

    //     const actual = reducers.activeSurvey("SurveyName-TWO", actions.unsetActiveSurvey())

    //     const expected = ""
        
    //     expect(actual).to.deep.equal(expected)
    // })


})
