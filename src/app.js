import React, { Component } from "react"
import { render } from "react-dom"

import { Dashboard } from "./dashboard"

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
            <Dashboard />
         </div>
    </div>


render(<PageLayout />, entry)
