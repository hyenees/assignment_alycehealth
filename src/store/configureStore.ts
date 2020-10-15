import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(createLogger()))
  );

export default configureStore;
