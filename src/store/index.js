import todoApp from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const storeFactory = function(initialState = {}) {
  return createStore(
    todoApp,
    initialState,
    composeWithDevTools(applyMiddleware(logger, thunk))
  );
};

const logger = store => next => action => {
  let result;
  console.log("dispatching", action);
  result = next(action);
  console.log("state", store.getState());
  return result;
};

export default storeFactory;
