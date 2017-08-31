import React, {Component} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'

class TaskTwo extends Component {

    onClick = () => {
        window.open("http://www.dublincoach.ie")
    }

    render(){
        return (
            <div className="card">
                <h1>Book a Ticket</h1>
                <p>For this task follow the steps it takes to book the following:</p>
                <p>Return Ticket for 2 Adults <br/>Start: Tralee - Princes Street<br/> Going: Dublin - City Centre</p>
                <LinkContainer to="/task/2/survey">
                    <Button onClick={this.onClick}>Start</Button>
                </LinkContainer>
            </div>
        )
    }
}

export default TaskTwo