import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const navItems = [
  { name: "Моя клиника", url: "/my-clinic", id: "MyClinic" },
  { name: "Заявки", url: "/claims", id: "Claims" },
  { name: "Расписание врача", url: "/schedule", id: "Schedule" },
  { name: "Личный кабинет врача", url: "/personal-area", id: "PersonalArea" },
  { name: "Все врачи", url: "/all-doctors", id: "AllDoctors" },
  { name: "Контакты", url: "/contacts", id: "Contacts" },
  { name: "Выход", url: "/sign-out", id: "SignOut" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App navItems={navItems} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
