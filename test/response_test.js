import React from "react"
import { createRenderer } from "react-addons-test-utils"

import Response from "../src/dashboard/responses/response"
import expect  from "chai"

describe("test", () => {
    it("should sdo something...", () => {
        const renderer = createRenderer()
        renderer.render(<Response />)
        const output = renderer.getRenderOutput()
        console.log(output)

    })
})