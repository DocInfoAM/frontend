import './index.css'
import { rerenderEntireTree } from "./render";
import { clinicID, clinics, doctors, clinicSchedule, doctorsSchedule, requests, newUser } from "./redux/State";

rerenderEntireTree({ clinicID, clinics, doctors, clinicSchedule, doctorsSchedule, requests });