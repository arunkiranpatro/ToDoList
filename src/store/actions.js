import C from "../constants"

export function addTodo(text) {
    return {
        type: C.ADD_TODO,
        text
    }
}
export function toggleTodo(index) {
    return {
        type: C.TOGGLE_TODO,
        index
    }
}
export function setVisibilityFilter(filter) {
    return {
        type: C.SET_VISIBILITY_FILTER,
        filter
    }
}