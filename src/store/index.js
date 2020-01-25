import todoApp from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const storeFactory = function(initialState = {}) {
  return createStore(todoApp, initialState, applyMiddleware(logger, thunk));
};

const logger = store => next => action => {
  let result;
  if (action.type){
    console.log("dispatching", action);
  }
  result = next(action);
  console.log("state", store.getState());
  return result;
};

export default storeFactory;
