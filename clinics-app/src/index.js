import classes from "./index.css";
import reportWebVitals from "./reportWebVitals";
import { rerenderEntireTree } from "./render";
import { clinics, doctors, clinicSchedule, doctorsSchedule, requests } from "./redux/State";

rerenderEntireTree({ clinics, doctors, clinicSchedule, doctorsSchedule, requests });