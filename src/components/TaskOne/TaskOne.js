import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class TaskOne extends Component {

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
            return <Redirect push to="/task/1/survey"/>
        }

        return (
            <div className="card">
                <h1>Sign in</h1>
                <p>For this task simply sign in using the following account details.</p>
                <p>Username: test<br/> Password:  test</p>
                <Button onClick={this.onClick}>Begin</Button>
            </div>
        )
    }
}

export default TaskOne