import Dispatcher from './Dispatcher.js';

const Actions = {
  editTask(text) {
    Dispatcher.dispatch({
      type: "EDIT_TASK",
      text,
    });
  }
}

export default Actions;