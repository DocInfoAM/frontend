import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loading from "./components/Loading/Loading";
import { getDoctors } from "./redux/State";
import { UserProvider } from "./context/UserProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (props) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
