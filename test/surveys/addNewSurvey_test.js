import React from "react"
import { createRenderer } from "react-addons-test-utils"

import AddNewSurvey from "../../src/surveys/components/addNewSurvey"
import { expect } from "chai"


describe("AddNewSurvey component", () => {
    const renderer = createRenderer()

    it("should render to children components", () => {
        
        renderer.render(<AddNewSurvey />)
        const output = renderer.getRenderOutput()
        const expected = output.props.children.length

        expect(expected).to.deep.equal(2)

    })
})