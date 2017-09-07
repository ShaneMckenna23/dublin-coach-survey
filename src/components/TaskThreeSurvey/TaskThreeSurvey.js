import React, { Component } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button,Form,FormGroup,Col, FormControl,ControlLabel, Radio,Collapse,Well,Glyphicon} from 'react-bootstrap'
import Actions from '../../TaskActions'
import Store from '../../TaskStore'
import {saveData} from '../../TaskUtils'

class TaskThreeSurvey extends Component {

    constructor(){
        super()
        this.state = {
            infoOpen: false,
            hintOpen: false
        }
    }

    componentWillMount () {
        Actions.editTaskRef("TASK_THREE")
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
                    <h1 style={{display:"inline"}}>Find a Stop</h1>
                    <br/>
                    <Button style={{marginRight: "1%"}} onClick={this.onInfoClick}><Glyphicon glyph="info-sign" /> Info</Button>
                    <Button onClick={this.onHintClick}><Glyphicon glyph="flag" /> Hint</Button>
                </div>
                <br/>
                <Collapse in={this.state.infoOpen}>
                <div>
                  <Well>
                    <p>Find the location of the Dublin city center stop</p>
                  </Well>
                </div>
              </Collapse>
              <Collapse in={this.state.hintOpen}>
                <div>
                  <Well>
                    <p>the stop can be found on the tab: timetables and fares – select a service – stop information – click a stop.</p>
                  </Well>
                </div>
              </Collapse>
              <br/>
                <Form horizontal>  

                    <FormGroup controlId="findLocation">
                        <Col componentClass={ControlLabel} sm={3} style={{textAlign: "left"}}>
                            Did you find the location of the stop?
                        </Col>
                        <Col sm={7}>
                            <Radio id="findLocation" name="radioGroup" inline onClick={this.onChange} value="Yes">
                                Yes
                            </Radio>
                            <Radio id="findLocation" name="radioGroup" inline onClick={this.onChange} value="No">
                                No
                            </Radio>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="hardToFind">
                        <Col componentClass={ControlLabel} sm={12} style={{textAlign: "left"}}>
                        In your opinion is this hard to find?
                        </Col>
                        <Col sm={12}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup>
                        <Col sm={10}>
                            <LinkContainer to="/task/4">
                                <Button onClick={this.onNext}>Next</Button>
                            </LinkContainer>
                        </Col>
                    </FormGroup>

                </Form>
            </div>
        )
    }
}

export default TaskThreeSurvey