import React, { Component } from 'react'
import Iframe from 'react-iframe'
import {Switch, Route } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import WelcomePage from '../WelcomePage/WelcomePage'

class SurveyPage extends Component {

    constructor(props, context) {
        super(props, context);
      
        this.state = {
        isVisible: false,
      };
    }
    
    updateModal(isVisible) {
        this.setState({isVisible:isVisible});
    }

    render () {
        return (
            <div>
                <div className='Sidebar-demo'>
                    <Button onClick={ () => this.updateModal(true) }>Display Modal Dialog</Button>
                    <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
                        <Switch>
                            <Route exact path='/survey' component={WelcomePage}/>
                            <Route exact path='/survey/1' component={WelcomePage}/>
                        </Switch>
                    </Sidebar>
                </div>
                <Iframe url="http://www.dublincoach.ie"
                    width="450px"
                    height="450px"
                    display="initial"
                    position="relative"/>
            </div>
        )
    }
}

export default SurveyPage