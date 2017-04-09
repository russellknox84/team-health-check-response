import { expect } from "chai"

import * as selectors from "../../src/surveys/selectors"

describe("Surveys selectors", () => {
    const state = {
        project: {
            activeProject: "ProjectName-ONE",
            projects: {
                ["ProjectName-ONE"]: {
                    surveysId: [1,2,3]
                }
           }
        }
    }

    it("should return the state activeProject id", () => {
       const selector = selectors.activeProject(state)

       const expected = "ProjectName-ONE"

       expect(selector).to.deep.equal(expected)
    })

    it("should return the surveyIds/surveyList from the active project namespace", () => {
       const selector = selectors.surveyList(state)

       const expected = [1,2,3]

       expect(selector).to.deep.equal(expected)
    })
})
