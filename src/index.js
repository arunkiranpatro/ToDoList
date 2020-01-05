import React from "react";
import ReactDom from "react-dom";
import { addTodo, toggleTodo } from "./actions/actions";
import { Provider } from "react-redux";
import App from "./components/App";
import storeFactory from "./store/index";

const store = storeFactory();

// Dispatch some actions
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-container")
);
