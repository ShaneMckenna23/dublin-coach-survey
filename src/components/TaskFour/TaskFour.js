import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class TaskFour extends Component {

    onClick = () => {
        window.open("http://www.dublincoach.ie")
    }

    render(){
        return (
            <div className="card">
                <h1>Find News</h1>
                <p>Find out where the Tralee stop relocated to.</p>
                <LinkContainer to="/task/4/survey">
                    <Button onClick={this.onClick}>Start</Button>
                </LinkContainer>
            </div>
        )
    }
}

export default TaskFour