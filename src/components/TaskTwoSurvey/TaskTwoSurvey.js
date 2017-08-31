import React, { Component } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button,Form,FormGroup,Col, FormControl,ControlLabel, Radio, Well, Collapse, Glyphicon} from 'react-bootstrap'
import Actions from '../../TaskActions'
import Store from '../../TaskStore'
import {saveData} from '../../TaskUtils'

class TaskTwoSurvey extends Component {

    constructor(){
        super()
        this.state = {open: false}
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
            open: !this.state.open
        })
    }

    render () {
        return (
            <div className="card">
                <div>
                    <h1 style={{display:"inline"}}>Book a Ticket</h1>
                    <Button style={{float:"right"}} onClick={this.onInfoClick}><Glyphicon glyph="info-sign" /> Info</Button>
                </div>
                <br/>
                <Collapse in={this.state.open}>
                    <div>
                    <Well>
                        <p>For this task follow the steps it takes to book the following:</p>
                        <p>Return Ticket for 2 Adults <br/>Start: Tralee - Princes Street<br/> Going: Dublin - City Centre</p>
                    </Well>
                    </div>
                </Collapse>
                <br/>
                <Form horizontal>
                    <FormGroup controlId="wasThatHard">
                        <Col componentClass={ControlLabel} sm={2} >
                            Was that hard?
                        </Col>
                        <Col sm={10}>
                            <Radio id="wasThatHard" name="radioGroup" inline onClick={this.onChange} value="Yes">
                                Yes
                            </Radio>
                            <Radio id="wasThatHard" name="radioGroup" inline onClick={this.onChange} value="No">
                                No
                            </Radio>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="testing?">
                        <Col componentClass={ControlLabel} sm={2}>
                            Testing?
                        </Col>
                        <Col sm={10}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
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