import React, { Component } from 'react'
import Iframe from 'react-iframe'
import {Link} from 'react-router-dom'

class SurveyPage extends Component {
    render () {
        return (
            <div>
                <h1>Survey Page</h1>
                <Iframe url="http://www.dublincoach.ie"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
            </div>
        )
    }
}

export default SurveyPage