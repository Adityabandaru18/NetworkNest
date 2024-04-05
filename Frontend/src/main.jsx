import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
