import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class TaskFour extends Component {

    constructor(){
        super()
        this.state = {redirect: false}
    }

    onClick = () => {
        window.open("http://www.dublincoach.ie")
        this.setState({
            redirect: true
        })
    }

    render(){
        if(this.state.redirect){
            return <Redirect push to="/task/4/survey"/>
        }

        return (
            <div className="card">
                <h1>Task Four</h1>
                <Button onClick={this.onClick}>Begin</Button>
            </div>
        )
    }
}

export default TaskFour