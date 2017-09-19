import React, { Component } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button,Form,FormGroup,Col, FormControl,ControlLabel, Radio,Collapse,Well,Glyphicon} from 'react-bootstrap'
import Actions from '../../TaskActions'
import Store from '../../TaskStore'
import {saveData} from '../../TaskUtils'

class TaskFourSurvey extends Component {

    constructor(){
        super()
        this.state = {
            infoOpen: false,
            hintOpen: false
        }
    }

    componentWillMount () {
        Actions.editTaskRef("TASK_FOUR")
    }
    
    onChange = (e) => {
        Actions.editSurveyField(e.target.id, e.target.value) 
    }

    onNext = () => {
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
                    <h1 style={{display:"inline"}}>Find News</h1>
                    <br/>
                    <Button onClick={this.onInfoClick}><Glyphicon glyph="info-sign" /> Info</Button>
                </div>
                <br/>
                <Collapse in={this.state.infoOpen}>
                <div>
                  <Well>
                    <p>Find out where the Tralee stop relocated to.</p>
                  </Well>
                </div>
              </Collapse>
              <br/>
                <Form horizontal> 
                    <FormGroup controlId="findNews">
                        <Col componentClass={ControlLabel} sm={3} style={{textAlign: "left"}}>
                            Did you find the news article?
                        </Col>
                        <Col sm={7}>
                            <Radio id="findNews" name="radioGroup" inline onClick={this.onChange} value="Yes">
                                Yes
                            </Radio>
                            <Radio id="findNews" name="radioGroup" inline onClick={this.onChange} value="No">
                                No
                            </Radio>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="latestNews">
                        <Col componentClass={ControlLabel} sm={3} style={{textAlign: "left"}}>
                            Where can you find the latest news?
                        </Col>
                        <Col sm={7}>
                            <Radio id="latestNews" name="radioGroup2" inline onClick={this.onChange} value="Facebook">
                                Facebook feed
                            </Radio>
                            <Radio id="latestNews" name="radioGroup2" inline onClick={this.onChange} value="News">
                                News page 
                            </Radio>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="whereLookNews">
                        <Col componentClass={ControlLabel} sm={12} style={{textAlign: "left"}}>
                        If you were waiting for a bus would you go to their Facebook page to see news updates? if no, where would you look?
                        </Col>
                        <Col sm={12}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={10}>
                            <LinkContainer to="/task/5">
                                <Button onClick={this.onNext}>Next</Button>
                            </LinkContainer>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default TaskFourSurvey