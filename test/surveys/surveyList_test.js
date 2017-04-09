import React from "react"
import { createRenderer } from "react-addons-test-utils"

import SurveyList from "../../src/surveys/components/surveyList"
import { expect } from "chai"


describe("AddNewSurvey component", () => {
    const renderer = createRenderer()

    it("should render to children components", () => {
        const survey = [1,2,3]

        renderer.render(<SurveyList surveys={survey} />)

        const output = renderer.getRenderOutput()

        const expected = output.props.children.length

        expect(expected).to.deep.equal(3)

    })
})