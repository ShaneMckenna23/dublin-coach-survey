import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class SurveyInfo extends Component {

    constructor(){
        super()
        this.state = {redirect: false}
    }

    handleClick = () =>{
        this.setState({
            redirect: true
        })
    }
    render () {
        if(this.state.redirect){
            return <Redirect push to="/survey/1"/>
        }
        return (
            <div className="center-div">
                <div className="col-md-6 col-md-offset-3">
                    <div className="card">
                        <h1 className="card-title">Survey Information</h1>
                        <div className="card-content">
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
                            <div className="text-center">
                                <Button className="center" onClick={this.handleClick}>Start</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyInfo