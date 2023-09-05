import { rerenderEntireTree } from "./render";
import { clinicID, clinics, doctors, clinicSchedule, doctorsSchedule, requests } from "./redux/State";

rerenderEntireTree({ clinicID, clinics, doctors, clinicSchedule, doctorsSchedule, requests });