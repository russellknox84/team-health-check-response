import { expect } from "chai"
import * as actions from "../../src/surveys/actions"

describe("Survey actions", () => {
    it("should return addNewSurvey action", () => {

        const expected = {
            type: "ADD_SURVEY",
            payload: "the paylaod"
        }

        expect(actions.addNewSurvey("the paylaod")).to.deep.equal(expected)
    })
    it("should return setActiveSurvey action", () => {

        const expected = {
            type: "SET_ACTIVE_SURVEY",
            surveyName: "The Survey Name"
        }

        expect(actions.setActiveSurvey("The Survey Name")).to.deep.equal(expected)
    })
    it("should return unsetActiveSurvey action", () => {

        const expected = {
            type: "UNSET_ACTIVE_SURVEY"
        }

        expect(actions.unsetActiveSurvey()).to.deep.equal(expected)
    })
    it("should return unsetActiveQuestion action", () => {

        const expected = {
            type: "UNSET_ACTIVE_QUESTION"
        }

        expect(actions.unsetActiveQuestion()).to.deep.equal(expected)
    })
})