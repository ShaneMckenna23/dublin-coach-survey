import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class SurveyInfo extends Component {
    
    render () {
        return (
            <div className="card">
                <h1>Welcome to the Dublin Coach survey</h1>
                <div>
                    <p>This survey will be used to learn about user experience on Dublin coach’s website. 
                    If you cannot finish a task move onto the questions and explain why.</p>
                    <p>Once the survey
                    is complete you will be in with a chance to win a €20 Just Eat Voucher.
                    Email will be used to contact the winner.</p>

                    <p>Click 'Start' to begin</p>                  
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