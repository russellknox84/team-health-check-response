const { groupByQuestion, groupByResponse } = require("../src/dashboard/responses/response_helpers")
const { expect } = require("chai")

describe("how user response data should be formatted", () => {
   
    const userResponse = [
        {
            date: "22-1-2017",
            userResponse: [
                {
                    question: "question-one",
                    userResponse: "value-one"
                },
                {
                    question: "question-two",
                    userResponse: "value-two"
                }

            ]
        },
        {
            date: "24-1-2017",
            userResponse: [
                {
                    question: "question-one",
                    userResponse: "value-three"
                },
                {
                    
                    question: "question-two",
                    userResponse: "value-four"
                }
            ]
        },
    ]

    it ("should be formatted by reponse", () => {
       
        const expected = {
            ["22-1-2017"]: [
                [{
                    question: "question-one",
                    userResponse: "value-one"
                },
                {   
                    question: "question-two",
                    userResponse: "value-two"
                }],
            ],
            ["24-1-2017"]: [
                [{
                    question: "question-one",
                    userResponse: "value-three"
                },
                {   
                    question: "question-two",
                    userResponse: "value-four"
                }],
            ]
        }

        const actual = groupByResponse(userResponse)
        expect(expected).to.deep.equal(actual)

    })
    it ("should be formatted by question", () => {

        const expected = {
            ["question-one"]: 
                [{
                    question: "question-one",
                    userResponse: "value-one",
                    date: "22-1-2017"
                },
                {
                    question: "question-one",
                    userResponse: "value-three",
                    date: "24-1-2017"
                }],
            ["question-two"]:
                [{
                    question: "question-two",
                    userResponse: "value-two",
                    date: "22-1-2017"

                },
                {
                    question: "question-two",
                    userResponse: "value-four",
                    date: "24-1-2017"
                }],
        
        }
        const actual = groupByQuestion(userResponse)
        expect(expected).to.deep.equal(actual)
    })
})