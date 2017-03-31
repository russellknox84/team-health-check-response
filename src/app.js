import React, { Component } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, 
         Route, 
         Link } from "react-router-dom"

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { Dashboard } from "./dashboard"
import Test from "./questions"

import { Project } from "../src/project"
import Check from "./questions/components/Project"

import projects from "./questions/reducers"
import project from "./project/reducers"

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
                        <ul>
                            <li><Link to="/">Projects</Link></li>
                            <li><Link to="/results">Results</Link></li>
                            <li><Link to="/about">Question</Link></li>
                        </ul>

                        <hr/>
                        <Route exact path="/" component={Project}/>
                        <Route exact path="/results" component={Dashboard}/>
                        <Route exact path="/about/:project" component={Check}/>
                        <Route exact path="/about" component={Test}/>
          
                     </div>
            </Router>
         </div>
    </div>


const rootReducer = combineReducers({
  projects,
  project
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

const questions = () => {
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


            const store = createStore(rootReducer, {projects:{projects, projectId}})
            const App = () =>
                <Provider store={store}>
                    <PageLayout />
                </Provider>

            render(<App />, entry)
        })
}

questions()


