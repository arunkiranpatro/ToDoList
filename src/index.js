import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import storeFactory from "./store/index";
const axios = require("axios");
import { VisibilityFilters } from "./constants";

axios
  .get("http://localhost:5000/api/tasks/getAll")
  .then(response => response.data)
  .then(response => {
    let initialState = {
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: response
    };
    const store = storeFactory(initialState);
    //store.dispatch(fetchToDos());
    ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("react-container")
    );
  })
  .catch(err => console.log(err));
