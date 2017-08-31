import React, { Component } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button,Form,FormGroup,Col, FormControl,ControlLabel, Radio,Collapse,Well,Glyphicon} from 'react-bootstrap'
import Actions from '../../TaskActions'
import Store from '../../TaskStore'
import {saveData} from '../../TaskUtils'

class TaskOneSurvey extends Component {

    constructor(){
        super()
        this.state = {open: false}
    }
    componentWillMount () {
        Actions.editTaskRef("TASK_ONE")
    }
    
    onChange = (e) => {
        Actions.editSurveyField(e.target.id, e.target.value)
        
    }

    onNext = () =>{
        saveData(Store.getAllTasks())
        Store.clearAll()
    }

    onInfoClick = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render () {
        return (
            <div className="card">
                <div>
                    <h1 style={{display:"inline"}}>Sign in</h1>
                    <Button style={{float:"right"}} onClick={this.onInfoClick}><Glyphicon glyph="info-sign" /> Info</Button>
                </div>
                <br/>
                <Collapse in={this.state.open}>
                <div>
                  <Well>
                    <p>For this task simply sign in using the following account details.</p>
                    <p>Username: test<br/> Password:  test</p>
                  </Well>
                </div>
              </Collapse>
              <br/>
                <Form horizontal>
                    <FormGroup controlId="SignIn">
                        <Col componentClass={ControlLabel} sm={2} >
                            Could you sign in?
                        </Col>
                        <Col sm={10}>
                            <Radio id="signIn" name="radioGroup" inline onClick={this.onChange} value="Yes">
                                Yes
                            </Radio>
                            <Radio id="signIn" name="radioGroup" inline onClick={this.onChange} value="No">
                                No
                            </Radio>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="hardFind">
                        <Col componentClass={ControlLabel} sm={2}>
                            Was it hard to find?
                        </Col>
                        <Col sm={10}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <LinkContainer to="/task/2">
                                <Button onClick={this.onNext}>Next</Button>
                            </LinkContainer>
                        </Col>
                    </FormGroup>

                </Form>
            </div>
        )
    }
}

export default TaskOneSurvey