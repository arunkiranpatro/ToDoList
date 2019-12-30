import {
    constants
} from "./constants"

export function addTodo(text) {
    return {
        type: constants.ADD_TODO,
        text
    }
}
export function toggleTodo(index) {
    return {
        type: constants.TOGGLE_TODO,
        index
    }
}
export function setVisibilityFilter(filter) {
    return {
        type: constants.SET_VISIBILITY_FILTER,
        filter
    }
}