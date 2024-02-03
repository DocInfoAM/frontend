import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./components/Context/AuthProvider";
import Loading from "./components/Loading/Loading";
import { getDoctors } from "./redux/State";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (props) => {
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  );
};
