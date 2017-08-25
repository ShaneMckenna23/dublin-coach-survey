import Dispatcher from './Dispatcher';
import { EventEmitter } from 'events';

let task = [];

class TaskStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

    getAll() {
        return task;
    }

    updateTaskField(text){
        task.push(text)
    }

    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    dispatcherCallback(action) {
        switch (action.type) {
            case 'EDIT_TASK':
                this.updateTaskField(action.text)
                break;
            default:

        }
        
        this.emitChange('STORE_' + action.type);

        return true;
    }
}

export default new TaskStore();