import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class SurveyInfo extends Component {
    
    render () {
        return (
            <div className="card">
                <h1>Survey Information</h1>
                <div>
                    <p>This survey will be used to learn about dublincoach.ie user experience</p>
                    <br/>
                    <p>Tasks to perform:</p>
                    <ul>
                        <li>Sign in</li>
                        <li>Book a ticket</li>
                        <li>Find a stop</li>
                        <li>Find route updates</li>
                        <li>asdasd asd d as</li>
                    </ul>
                    <div>
                        <LinkContainer to="/task/1">
                            <Button>Start</Button>
                        </LinkContainer>
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyInfo