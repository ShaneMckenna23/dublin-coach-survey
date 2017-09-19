import React, {Component} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button,Form,FormGroup,Col, FormControl,ControlLabel, Radio} from 'react-bootstrap'
import Actions from '../../TaskActions'
import Store from '../../TaskStore'
import {saveData} from '../../TaskUtils'


class TaskFive extends Component {

    componentWillMount () {
        Actions.editTaskRef("TASK_FIVE")
    }
    
    onChange = (e) => {
        Actions.editSurveyField(e.target.id, e.target.value) 
    }

    onSubmit = () =>{
        saveData(Store.getAllTasks())
        Store.clearAll()
    }

    render(){
        return (
            <div className="card">
                <h1>General</h1>
                <Form horizontal> 
                    <FormGroup controlId="downloadApp">
                        <Col componentClass={ControlLabel} sm={3} style={{textAlign: "left"}}>
                            Would you download the Dublin Coach app?
                        </Col>
                        <Col sm={7}>
                            <Radio id="downloadApp" name="radioGroup" inline onClick={this.onChange} value="Yes">
                                Yes
                            </Radio>
                            <Radio id="downloadApp" name="radioGroup" inline onClick={this.onChange} value="No">
                                No
                            </Radio>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="websiteProblems">
                        <Col componentClass={ControlLabel} sm={12} style={{textAlign: "left"}}>
                            Have you found any problems with their website or mobile app?
                        </Col>
                        <Col sm={12}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>
                </Form>
                <LinkContainer to="/finish">
                    <Button onClick={this.onSubmit}>Next</Button>
                </LinkContainer>
            </div>
        )
    }
}

export default TaskFive