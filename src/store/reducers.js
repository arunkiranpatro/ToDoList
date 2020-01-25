import { constants } from "../constants";
import { VisibilityFilters } from "../constants";

import { combineReducers } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          _id: action.uniqueid,
          completed: false
        }
      ];
    case constants.TOGGLE_TODO:
      return state.map(todo => {
        if (todo._id === action.uniqueid) {
          return Object.assign({}, todo, {
            completed: action.completed
          });
        }
        return todo;
      });
    case constants.INIT:
      return [...state, ...action.response];
    default:
      return state;
  }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case constants.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});
export default todoApp;
