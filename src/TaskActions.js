import Dispatcher from './Dispatcher.js';

const Actions = {
  editSurveyField(field, value) {
    Dispatcher.dispatch({
      type: "EDIT_SURVEY_FIELD",
      field,
      value
    });
  },
  editTaskRef(value) {
    Dispatcher.dispatch({
      type: "EDIT_TASK_REF",
      value
    });
  },
  updateResults(value) {
    Dispatcher.dispatch({
      type: "UPDATE_RESULTS",
      value
    });
  }
}

export default Actions;