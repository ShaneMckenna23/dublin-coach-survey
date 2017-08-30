import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class TaskTwoSurvey extends Component {

    constructor(){
        super()
        this.state = {redirect : false}
    }

    onClick = () => {
        this.setState({
            redirect : true
        })
    }

    render () {
        if(this.state.redirect){
            return <Redirect push to="/task/3"/>
        }
        return (
            <div className="card">
                <h1>Task Two Survey</h1>
                <Button onClick={this.onClick}>Next</Button>
            </div>
        )
    }
}

export default TaskTwoSurvey