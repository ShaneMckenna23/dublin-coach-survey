import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import WelcomePage from '../WelcomePage/WelcomePage'
import TaskOne from '../TaskOne/TaskOne'

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
                            <Route exact path='/survey/1' component={TaskOne}/>
                        </Switch>
                    </Sidebar>
                </div>

                <TaskOne/>
            </div>
        )
    }
}

export default SurveyPage