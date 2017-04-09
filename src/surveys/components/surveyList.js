import React from "react"

import SurveyListLinks from "./surveyListLink"

const SurveyList = ({ surveys, match, setActiveSurvey }) =>
        <div className="column-one-quarter border-right overflow-auto">
            <h2 className="heading-small heading-contents">Current Surveys</h2>
            {surveys.map(survey => 
                <div>
                    <SurveyListLinks match={match} survey={survey} setActiveSurvey={setActiveSurvey} />
                </div>
            )}
        </div>

export default SurveyList