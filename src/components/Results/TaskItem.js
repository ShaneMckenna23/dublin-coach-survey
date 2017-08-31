import React, { Component } from 'react'
import {ListGroupItem} from 'react-bootstrap'

class TaskItem extends Component {

    render () {
        const data = this.props.data
        return (
            <ListGroupItem>
                <div><pre>{JSON.stringify(data) }</pre></div>
            </ListGroupItem>
        )
    }
}

export default TaskItem