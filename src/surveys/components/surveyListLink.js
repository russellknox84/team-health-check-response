import React from "react"
import { Link } from "react-router-dom"

const SurveyListLinks = ({ match, survey, setActiveSurvey }) =>
          <div>
            <Link role="button" 
                    className="tab" 
                    to={`${match.url}/${survey}`} 
                    onClick={() => setActiveSurvey(survey)}>
                    {survey}
            </Link>
        </div>

export default SurveyListLinks