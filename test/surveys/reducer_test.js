import { expect } from "chai"

import * as reducers from "../../src/surveys/reducers"
import * as actions from "../../src/surveys/actions"

describe("Survey reducers", () => {

    it("should return an empty {} as inital state for surveys", () => {
        const actual = reducers.surveys(undefined, {})
        
        expect(actual).to.deep.equal({})
    })

    it("should handle ADD_SURVEY and create new survey namespace", () => {
        const payload = {
                name: "SurveyName-ONE",
                id: 1234,
                url: "survey-name",
                draft: false,
                published: false
        }

        const actual = reducers.surveys({
            ["SurveyName-TWO"]: {}
        }, actions.addNewSurvey(payload))

        const expected = {
            ["SurveyName-TWO"]: {},
            ["SurveyName-ONE"]: {
                projectTitle: "SurveyName-ONE",
                id: 1234,
                url: "survey-name",
                draft: false,
                published: false,
            }         
        }
        
        expect(actual).to.deep.equal(expected)
    })

    it("should return an empty [] as inital state for surveyIds", () => {
        const actual = reducers.surveyIds(undefined, [])
        
        expect(actual).to.deep.equal([])
    })

    it("should handle ADD_SURVEY and create new surveyID", () => {

        const payload = {
                name: "SurveyName-TWO"
            }

        const actual = reducers.surveyIds(["SurveyName-ONE"], actions.addNewSurvey(payload))

        const expected = ["SurveyName-ONE", "SurveyName-TWO"]   
        
        expect(actual).to.deep.equal(expected)
    })

    it("should return an empty '' as inital state for active survey", () => {
        const actual = reducers.activeSurvey(undefined, {})
        
        expect(actual).to.deep.equal("")
    })

    it("should handle SET_ACTVE_SURVEY and return string with active survey id", () => {

        const surveyName = "SurveyName-ONE"

        const actual = reducers.activeSurvey("SurveyName-TWO", actions.setActiveSurvey(surveyName))

        const expected = "SurveyName-ONE"
        
        expect(actual).to.deep.equal(expected)
    })

    it("should handle UNSET_ACTVE_SURVEY and return and empty string", () => {

        const actual = reducers.activeSurvey("SurveyName-TWO", actions.unsetActiveSurvey())

        const expected = ""
        
        expect(actual).to.deep.equal(expected)
    })


})
