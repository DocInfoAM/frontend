import React from "react";
import ReactDOM from "react-dom/client";
import classes from "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (props) => {
  root.render(
    <React.StrictMode>
      <App state={props.state} doctors={props.doctors} />
    </React.StrictMode>
  );
};
