import Dispatcher from './Dispatcher';
import { EventEmitter } from 'events';

let task = {
    ref: "",
    survey: {}
};

let results = {}

class TaskStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    clearAll(){
        task = {
            ref: "",
            survey: {}
        };
    }

    getAllTasks() {
        return task;
    }

    getAllResults(){
        return results;
    }

    updateTaskRef(newRef){
        task.ref = newRef
    }

    updateSurveyField(field, value){
        task.survey[field] = value
    }

    updateResults(newResults){
        results = newResults
    }

    dispatcherCallback(action) {
        switch (action.type) {
            case 'EDIT_SURVEY_FIELD':
                this.updateSurveyField(action.field, action.value)
                break;
            case 'EDIT_TASK_REF':
                this.updateTaskRef(action.value)
                break;
            case 'UPDATE_RESULTS':
                this.updateResults(action.value)
                break;
            default:
        }
        
        this.emitChange('UPDATE');

        return true;
    }
}

export default new TaskStore();