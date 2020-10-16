import React from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "store/configureStore";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} />
    <Routes />
  </Provider>,
  document.getElementById("root")
);
