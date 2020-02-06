import { constants, VisibilityFilters } from '../constants';

const axios = require('axios');

export function addTodo(text, uniqueid) {
  return {
    type: constants.ADD_TODO,
    text,
    uniqueid
  };
}
export function toggleTodo(uniqueid, completed) {
  return {
    type: constants.TOGGLE_TODO,
    uniqueid,
    completed
  };
}
export function setVisibilityFilter(filter) {
  return {
    type: constants.SET_VISIBILITY_FILTER,
    filter
  };
}

export function mapDataFromDB(response) {
  return {
    type: constants.INIT,
    response
  };
}
export const toggleTodoWrapper = (id, uniqueid) => dispatch => {
  axios
    .post('http://localhost:5000/api/tasks/update', { id: uniqueid })
    .then(response => {
      dispatch(toggleTodo(response.data._id, response.data.completed));
    })
    .catch(err => console.log(err));
};

export const addTask = text => dispatch => {
  axios
    .post('http://localhost:5000/api/tasks/create', { text })
    .then(response => {
      dispatch(addTodo(response.data.text, response.data._id));
      dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
    })
    .catch(err => console.log(err));
};

export const fetchToDos = () => dispatch => {
  axios
    .get('http://localhost:5000/api/tasks/getAll')
    .then(response => response.data)
    .then(response => {
      dispatch(mapDataFromDB(response));
    })
    .catch(err => console.log(err));
};
