import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./components/Context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (props) => {
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <App
          clinicID={props.clinicID}
          clinics={props.clinics}
          doctors={props.doctors}
          clinicSchedule={props.clinicSchedule}
          doctorsSchedule={props.doctorsSchedule}
          requests={props.requests}
          newUser={props.newUser}
        />
      </AuthProvider>
    </React.StrictMode>
  );
};
