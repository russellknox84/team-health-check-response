import React, { Component } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, 
         Route, 
         Link } from "react-router-dom"

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { Dashboard } from "./dashboard"
import Surveys from "./surveys"

import { ProjectList, Project } from "../src/projects"
import Questions from "./questions"

import projects from "./questions/reducers"
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
        <div className="container">
            <Router>
                <div>
                    <div>
                        <Link className="link" to="/projects">Projects</Link>
                        <hr />
                    </div>
                    <Route exact path="/"/>
                    <Route exact path="/projects/" component={ProjectList}/>
                    <Route exact path="/projects/:project" component={Surveys}/>
                    <Route path="/projects/:project/:survey" component={Project}/> 
                    </div>
            </Router>
         </div>
    </div>


const rootReducer = combineReducers({
  questions,
  project,
  surveys
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

            console.log("first", question.data)
            console.log("second", projectsq.data)
            console.log("surveys", survey.data)

        //     const projectss = question.data.reduce((state, value) => {

        //         return {...state, [value.projectTitle]: {
        //         projectTitle: value.projectTitle,
        //         id: value._id,
        //         draft: value.draft,
        //         published: value.published,
        //         question: value.questions
        // }}
        //     }, {})

            const surveyIds = survey.data.map(survey => survey.surveyName)
            
            const surveys = survey.data.reduce((state, value) => {
                return Object.assign(state, {[value.surveyName]: {
                    surveysId: []
                }})
            }, {})

            const projects = projectsq.data.reduce((state, value) => {
                return Object.assign(state, {[value.projectName]: {
                    _id: value._id,
                    surveysId: value.surveys.map(survey => survey.surveyName)
                }})
            }, {})

            // console.log("new state++++++", projects)

        //     const projectsqq = {
        //     ["Team 1"]: {
        //         surveysId: ["Team Health Check", "create-new-project"]
        //     },
        //     ["Team 2"]: {
        //         surveysId: ["New Project", "Team Health Check"]
        //     }
        // }

            // const surveyIds = question.data.map(ids => {
            //     return ids.projectTitle
            // })

            const projectIds = projectsq.data.map(ids => {
                return ids.projectName
            })

            const questions = survey.data.reduce((state, value) => {
                    //return {...state, [value.surveyName]: value.questions.map(a => a) }
                    return {...state, [value.surveyName]: []}
            }, {})


            // const surveys = projectss

            const initialState = {
                ["questions"]: { questions },
                ["surveys"]: { surveys, surveyIds },
                ["project"]: { projects, projectIds }
            }

            const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
            const App = () =>
                <Provider store={store}>
                    <PageLayout />
                </Provider>

            render(<App />, entry)
         }))
 
            
       
}

initRender()


