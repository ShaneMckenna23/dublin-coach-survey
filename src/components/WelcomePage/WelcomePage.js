import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class WelcomePage extends Component {
    
    constructor(){
        super()
        this.state = {redirect: false}
    }

    handleClick = () => {
        this.setState({
            redirect: true
        })
    }

    render () {
        if (this.state.redirect) {
            return <Redirect push to="/survey" />;
        }

        return (
            <header className="header">
                <div className="text-vertical-center">
                    <h1>Welcome</h1>
                    <h3>This is a survey for dublincoach.ie</h3>
                    <br/>
                    <Button className="btn btn-dark btn-lg" onClick={this.handleClick}>Find Out More</Button>
                </div>
            </header>
        )
    }
}

export default WelcomePage