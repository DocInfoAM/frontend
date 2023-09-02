import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.css";
import App from "./App";
import { AuthProvider } from "./components/Context/AuthProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (props) => {
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <App
          clinics={props.clinics}
          doctors={props.doctors}
          clinicSchedule={props.clinicSchedule}
          doctorsSchedule={props.doctorsSchedule}
          requests={props.requests}
        />
      </AuthProvider>
    </React.StrictMode>
  );
};
