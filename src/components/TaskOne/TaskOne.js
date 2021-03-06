import React, {Component} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'

class TaskOne extends Component {

    onClick = () => {
        window.open("http://www.dublincoach.ie")
    }

    render(){
        return (
            <div className="card">
                <h1>Sign in</h1>
                <p>For this task simply locate the sign in option.</p>
                <LinkContainer to="/task/1/survey">
                    <Button onClick={this.onClick}>Start</Button>
                </LinkContainer>
            </div>
        )
    }
}

export default TaskOne