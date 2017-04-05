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

const getQuestions = () => {
    axios.get("/questions")
        .then(question => {
            const projects = question.data.reduce((state, value) => {
                console.log(state, value)
                return {...state, [value.projectTitle]: {
                projectTitle: value.projectTitle,
                id: value._id,
                draft: value.draft,
                published: value.published,
                question: value.questions
        }}
            }, {})

            const projectId = question.data.map(ids => {
                return ids.projectTitle
            })

            const questions = question.data.reduce((state, value) => {
                    return {...state, [value.projectTitle]: value.questions}
            }, {})

            const surveyIds = projectId
            const surveys = projects

            const initialState = {
                ["questions"]: { questions },
                ["surveys"]: { surveys, surveyIds },
                //["projects"]: { projects, projectId }
            }

            const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
            const App = () =>
                <Provider store={store}>
                    <PageLayout />
                </Provider>

            render(<App />, entry)
        })
}

getQuestions()


