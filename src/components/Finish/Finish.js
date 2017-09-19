import React, { Component } from 'react'
import {Button,Form,FormGroup,Col, FormControl,ControlLabel,Alert} from 'react-bootstrap'
import Actions from '../../TaskActions'
import Store from '../../TaskStore'
import {saveData} from '../../TaskUtils'

class Finish extends Component {

    constructor(){
        super()
        this.state = {submit: false}
    }

    componentWillMount () {
        Actions.editTaskRef("EMAIL")
    }
    
    onChange = (e) => {
        Actions.editSurveyField(e.target.id, e.target.value)
    }

    onSubmit = () =>{
        saveData(Store.getAllTasks())
        Store.clearAll()
        this.setState({
            submit: true
        })
    }

    render () {
        const emailSuccess = <Alert bsStyle="success">Submission Successful</Alert>
        return (
            <div className="card">
                {this.state.submit === true ? emailSuccess : null}
                <h1 style={{display:"inline"}}>Thank You</h1>
                <p>Enter your email for a chance to win €20</p>
                <Form horizontal>
                    <FormGroup controlId="email">
                        <Col componentClass={ControlLabel} sm={12} style={{textAlign: "left"}}>
                        Email
                        </Col>
                        <Col sm={12}>
                            <FormControl onChange={this.onChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={10}>
                            <Button onClick={this.onSubmit}>Submit</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </div>
        )
    }
}

export default Finish