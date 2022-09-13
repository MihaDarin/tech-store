import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  cash: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Add_Cash":
      return { ...state, cash: state.cash + action.payload };
    case "Get_Cash":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
