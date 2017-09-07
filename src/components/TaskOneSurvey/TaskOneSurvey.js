import React, { Component } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button,Form,FormGroup,Col, FormControl,ControlLabel, Radio,Collapse,Well,Glyphicon} from 'react-bootstrap'
import Actions from '../../TaskActions'
import Store from '../../TaskStore'
import {saveData} from '../../TaskUtils'

class TaskOneSurvey extends Component {

    constructor(){
        super()
        this.state = {
            infoOpen: false,
            hintOpen: false
        }
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
            infoOpen: !this.state.infoOpen,
            hintOpen: false
        })
    }

    onHintClick = () => {
        this.setState({
            hintOpen: !this.state.hintOpen,
            infoOpen: false
        })
    }

    openTicketBooking = () => {
        window.open("http://ticketbooking.dublincoach.ie/")
    }

    render () {
        return (
            <div className="card">
                <div>
                    <h1 style={{display:"inline"}}>Sign in</h1>
                    <Button style={{float:"right"}} onClick={this.onInfoClick}><Glyphicon glyph="info-sign" /> Info</Button>
                    <Button style={{float:"right", marginRight: "1%"}} onClick={this.onHintClick}><Glyphicon glyph="flag" /> Hint</Button>
                </div>
                <br/>
                <Collapse in={this.state.infoOpen}>
                <div>
                  <Well>
                    <p>For this task simply locate the sign in option.</p>
                  </Well>
                </div>
              </Collapse>
              <Collapse in={this.state.hintOpen}>
                <div>
                  <Well>
                    <p>Sign in feature is only available when booking tickets. <a onClick={this.openTicketBooking}>Here</a></p>
                  </Well>
                </div>
              </Collapse>
              <br/>
                <Form horizontal>
                    <FormGroup controlId="SignIn">
                        <Col componentClass={ControlLabel} sm={2} style={{textAlign: "left"}}>
                            Could you find the sign in option? 
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

                    <FormGroup controlId="differOtherWeb">
                        <Col componentClass={ControlLabel} sm={12} style={{textAlign: "left"}}>
                        Does this differ to your experience on other websites? Explain why.
                        </Col>
                        <Col sm={12}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="relocateSignIn">
                        <Col componentClass={ControlLabel} sm={12} style={{textAlign: "left"}}>
                        Where would you relocate the sign in feature?
                        </Col>
                        <Col sm={12}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="signUp">
                        <Col componentClass={ControlLabel} sm={3} style={{textAlign: "left"}}>
                            Could you see a sign up option?
                        </Col>
                        <Col sm={7}>
                            <Radio id="signUp" name="radioGroup2" inline onClick={this.onChange} value="Yes">
                                Yes
                            </Radio>
                            <Radio id="signUp" name="radioGroup2" inline onClick={this.onChange} value="No">
                                No
                            </Radio>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={10}>
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