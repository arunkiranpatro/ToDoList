import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import todoApp from "./reducers";

const logger = store => next => action => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("state", store.getState());
  return result;
};

const storeFactory = function(initialState = {}) {
  return createStore(
    todoApp,
    initialState,
    composeWithDevTools(applyMiddleware(logger, thunk))
  );
};

export default storeFactory;
