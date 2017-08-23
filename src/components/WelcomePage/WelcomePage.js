import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class WelcomePage extends Component {
    render () {
        return (
            <div>
                <h1>Welcome</h1>
                <Link to="/survey">Next</Link>
            </div>
        )
    }
}

export default WelcomePage