import React, { Component } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, 
         Route, 
         Link } from "react-router-dom"

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { Dashboard } from "./dashboard"
import Surveys from "./surveys"

import { ProjectList, Project, Container} from "../src/projects"
import Questions from "./questions"

import results from "./dashboard/reducers"
import questions from "./questions/reducers"
import project from "./projects/reducers"
import surveys from "./surveys/reducers"

import Survey from "./surveys"

import axios from "axios"

import "../sass/index.scss"

const entry = document.querySelector(".entry")

const PageLayout = () => 
    <div>
        <header>
            <div className="container">
                <div id="banner-contents" className="grid-row">
                    <div className="column-full">
                        <h1 className="heading-medium no-margin">Team Health Check</h1>
                    </div>
                </div>
            </div>       
        </header>
        <Container />
    </div>


const rootReducer = combineReducers({
  questions,
  project,
  surveys,
  results
});

const addProject = (state, action) => {
        return {...state, [action.payload.name]: {
                projectTitle: action.payload.name,
                id: action.payload.id,
                draft: false,
                published: false,
                question: []
        }}
    }

const initRender = () => {
    const getQuestions = () => {
        return axios.get("/api/questions")
    }
    const getProjects = () => {
        return axios.get("/api/projects")
    }
    const getSurveys = () => {
        return axios.get("/api/surveys")
    }
    axios.all([getQuestions(), getProjects(), getSurveys()])
        .then(axios.spread(function (question, projectsq, survey) {

            const surveyIds = survey.data.map(survey => survey.surveyName)
            
            const surveys = survey.data.reduce((state, value) => {
                console.log(value, "surveys lvalues")
                return Object.assign(state, {[value.surveyName]: value })
            }, {})

            const projects = projectsq.data.reduce((state, value) => {
                return Object.assign(state, {[value.projectName]: {
                    _id: value._id,
                    surveysId: value.surveys.map(survey => survey.surveyName)
                }})
            }, {})


            const projectIds = projectsq.data.map(ids => ids.projectName)

            const questions = survey.data.reduce((state, value) => {
    
                 return {...state, [value.surveyName]: value.questions}
            }, {})


            const initialState = {
                ["questions"]: { questions },
                ["surveys"]: { surveys, surveyIds },
                ["project"]: { projects, projectIds },
                ["results"]: {}
            }

            console.log(initialState)

            const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
            const App = () =>
                <Provider store={store}>
                    <PageLayout />
                </Provider>

            render(<App />, entry)
         }))
 
            
       
}

initRender()


