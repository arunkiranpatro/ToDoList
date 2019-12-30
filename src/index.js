import {
    createStore
} from 'redux';
import todoApp from './store/reducers';
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
} from "./actions";

import {
    VisibilityFilters
} from "./constants";

const store = createStore(todoApp);


console.log(store.getState())
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// Stop listening to state updates
unsubscribe()