import React, { Component } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button,Form,FormGroup,Col, FormControl,ControlLabel, Radio,Collapse,Well,Glyphicon} from 'react-bootstrap'
import Actions from '../../TaskActions'
import Store from '../../TaskStore'
import {saveData} from '../../TaskUtils'

class TaskTwoSurvey extends Component {

    constructor(){
        super()
        this.state = {
            infoOpen: false,
            hintOpen: false
        }
    }

    componentWillMount () {
        Actions.editTaskRef("TASK_TWO")
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

    render () {
        return (
            <div className="card">
                <div>
                    <h1 style={{display:"inline"}}>Book a Ticket</h1>
                    <br/>
                    <Button onClick={this.onInfoClick}><Glyphicon glyph="info-sign" /> Info</Button>
                </div>
                <br/>
                <Collapse in={this.state.infoOpen}>
                <div>
                  <Well>
                    <p>For this task follow the steps it takes to book the following:</p>
                    <p>Return Ticket for 2 Adults <br/>Start: Tralee - Princes Street<br/> Going: Dublin - City Centre</p>
                  </Well>
                </div>
              </Collapse>
              <br/>
                <Form horizontal>  
                    <FormGroup controlId="timeConsuming">
                        <Col componentClass={ControlLabel} sm={12} style={{textAlign: "left"}}>
                        Do you think this process is time consuming?
                        </Col>
                        <Col sm={12}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="improveBooking">
                        <Col componentClass={ControlLabel} sm={12} style={{textAlign: "left"}}>
                        How would you improve the booking experience?
                        </Col>
                        <Col sm={12}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="SignIn">
                        <Col componentClass={ControlLabel} sm={3} style={{textAlign: "left"}}>
                            Would you buy a Dublin coach ticket online?
                        </Col>
                        <Col sm={7}>
                            <Radio id="buyTicket" name="radioGroup" inline onClick={this.onChange} value="Yes">
                                Yes
                            </Radio>
                            <Radio id="buyTicket" name="radioGroup" inline onClick={this.onChange} value="No">
                                No
                            </Radio>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={10}>
                            <LinkContainer to="/task/3">
                                <Button onClick={this.onNext}>Next</Button>
                            </LinkContainer>
                        </Col>
                    </FormGroup>

                </Form>
            </div>
        )
    }
}

export default TaskTwoSurvey