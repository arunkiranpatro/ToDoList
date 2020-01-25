import { constants } from "../constants";

import { VisibilityFilters } from "../constants";

const axios = require("axios");

export function addTodo(text, uniqueid) {
  return {
    type: constants.ADD_TODO,
    text,
    uniqueid
  };
}
export function toggleTodo(index) {
  return {
    type: constants.TOGGLE_TODO,
    index
  };
}
export function setVisibilityFilter(filter) {
  return {
    type: constants.SET_VISIBILITY_FILTER,
    filter
  };
}
export const toggleTodoWrapper = (id, uniqueid) => dispatch => {
  dispatch(toggleTodo(id));
  axios
    .post("http://localhost:5000/api/tasks/update", { id: uniqueid })
    .then(response => console.log(response))
    .catch(err => console.log(err));
};

export const addTask = text => dispatch => {
  axios
    .post("http://localhost:5000/api/tasks/create", { text })
    .then(response => {
      dispatch(addTodo(response.data.text, response.data._id));
      dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
    })
    .catch(err => console.log(err));
};

export const fetchToDos = () => dispatch => {
  axios
    .get("http://localhost:5000/api/tasks/getAll")
    .then(response => response.data)
    .then(response => {
      dispatch({ type: constants.INIT, response });
    })
    .catch(err => console.log(err));
};
