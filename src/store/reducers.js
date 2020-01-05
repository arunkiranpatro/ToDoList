import {
    constants
} from "../constants";
import {
    VisibilityFilters
} from "../constants";

import {
    combineReducers
} from 'redux';
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

function todos(state = [], action) {
    switch (action.type) {
        case constants.ADD_TODO:
            return [...state, {
                text: action.text,
                completed: false
            }];
        case constants.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        default:
            return state;
    }
}

function visibilityFilter(state =VisibilityFilters.SHOW_ALL, action) {
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