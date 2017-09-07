import React, {Component} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'

class TaskThree extends Component {

    onClick = () => {
        window.open("http://www.dublincoach.ie")
    }

    render(){
        return (
            <div className="card">
                <h1>Find a Stop</h1>
                <p>Find the location of the Dublin city center stop</p>
                <LinkContainer to="/task/3/survey">
                    <Button onClick={this.onClick}>Start</Button>
                </LinkContainer>
            </div>
        )
    }
}

export default TaskThree