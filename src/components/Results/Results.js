import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
import {readData} from '../../TaskUtils'
import TaskStore from '../../TaskStore'
import TaskItem from './TaskItem'

class Results extends Component {

    constructor(){
        super()
        this.state = {results: {}}
    }
    
    componentWillMount() {
        readData();
        TaskStore.addChangeListener('UPDATE', this.updateResults);
    }

    updateResults = () => {
        let allResults = TaskStore.getAllResults();
        this.setState({
            results: allResults
        })
    }

    renderTaskOne(){
        let itemsToRender = [];
        let taskOne = this.state.results.TASK_ONE

        if (taskOne != null){
            Object.keys(taskOne).map(function(objectKey, index) {
                let data = taskOne[objectKey];
                itemsToRender.push(<TaskItem data={data}/>)
                return null
            });
            return itemsToRender
        }
        return <h1>No Results</h1>
    }

    renderTaskTwo(){
        let itemsToRender = [];
        let taskTwo = this.state.results.TASK_TWO

        if (taskTwo != null){
            Object.keys(taskTwo).map(function(objectKey, index) {
                let data = taskTwo[objectKey];
                itemsToRender.push(<TaskItem data={data}/>)
                return null
            });
            return itemsToRender
        }
        return <h1>No Results</h1>
    }

    render () {
        return (
            <div>
                <h1>Task One</h1>
                <ListGroup>
                    {this.renderTaskOne()}
                </ListGroup>
                <h1>Task Two</h1>
                <ListGroup>
                    {this.renderTaskTwo()}
                </ListGroup>
            </div>
        )
    }
}

export default Results