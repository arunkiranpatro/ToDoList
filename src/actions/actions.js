import { constants } from "../constants";

import { VisibilityFilters } from "../constants";

export function addTodo(text) {
  return {
    type: constants.ADD_TODO,
    text
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

export const addTask = text => dispatch => {
  dispatch(addTodo(text));
  dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
};
