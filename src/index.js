import { createStore } from "redux";
import React from "react";
import ReactDom from "react-dom";
import todoApp from "./store/reducers";
import { addTodo, toggleTodo, setVisibilityFilter } from "./actions";
import { Provider } from "react-redux";
import App from "./App";
import {applyMiddleware} from "redux"
import thunk from "redux-thunk";

import { VisibilityFilters } from "./constants";

const store = createStore(todoApp,applyMiddleware(thunk));

console.log(store.getState());
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));
// Dispatch some actions
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// Stop listening to state updates

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-container")
);
