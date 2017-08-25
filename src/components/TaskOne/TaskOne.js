import React, {Component} from 'react'
import TaskStore from '../../TaskStore.js'

class TaskOne extends Component {

    constructor(){
        super()
        this.state = this.getStateFromStore()
    }

    getStateFromStore = () =>({
        task: TaskStore.getAll()
    })

    componentDidMount () {
        TaskStore.addChangeListener('UPDATE', this.update);
    }

    update = () => (
        this.setState(this.getStateFromStore())
    );
    
    render(){
        console.log(this.state.task)
        return (
            <form>
                <h1>This is task one</h1>
                <button type="submit">
                  Submit
                </button>
            </form>
        )
    }
}

export default TaskOne