import { expect } from "chai"
import * as actions from "../../src/projects/actions"



// export const unsetActiveProject = () => ({
//     type: types.UNSET_ACTIVE_PROJECT
// })

// export const unsetActiveSurvey = () => ({
//     type: types.UNSET_ACTIVE_SURVEY
// })

// export const unsetActiveQuestion = () => ({
//     type: types.UNSET_ACTIVE_QUESTION
// })

describe("Projects actions", () => {
    it("should return addNewProject action", () => {

        const expected = {
            type: "ADD_NEW_PROJECT",
            projectName: "the payload"
        }

        expect(actions.addNewProject("the payload")).to.deep.equal(expected)
    })
     it("should return setActiveProject action", () => {

        const expected = {
            type: "SET_ACTIVE_PROJECT",
            projectId: "the payload"
        }

        expect(actions.setActiveProject("the payload")).to.deep.equal(expected)
    })
    it("should return unsetActiveProject action", () => {

        const expected = {
            type: "UNSET_ACTIVE_PROJECT",
        }

        expect(actions.unsetActiveProject("the payload")).to.deep.equal(expected)
    })
    it("should return unsetActiveSurvey action", () => {

        const expected = {
            type: "UNSET_ACTIVE_SURVEY",
        }

        expect(actions.unsetActiveSurvey("the payload")).to.deep.equal(expected)
    })
    it("should return unsetActiveQuestion action", () => {

        const expected = {
            type: "UNSET_ACTIVE_QUESTION",
        }

        expect(actions.unsetActiveQuestion("the payload")).to.deep.equal(expected)
    })
})
    