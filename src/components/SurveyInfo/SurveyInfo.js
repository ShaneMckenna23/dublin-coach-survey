import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import Actions from '../../TaskActions'

class SurveyInfo extends Component {

    constructor(){
        super()
        this.state = {redirect: false}
    }

    handleClick = () =>{
        this.setState({
            redirect: true
        })
        Actions.editTask("s")
    }
    
    render () {
        if(this.state.redirect){
            return <Redirect push to="/task/1"/>
        }
        return (
            <div className="card">
                <h1>Survey Information</h1>
                <div>
                    <p>This survey is here to kash salkjd hjsa oiasd bkasdousa khabsd askjhsd iasdj kjasdkid oaishdkjasdbasdiasd</p>
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
                        <Button onClick={this.handleClick}>Start</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyInfo