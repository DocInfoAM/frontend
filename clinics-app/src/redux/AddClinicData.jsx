import { rerenderEntireTree } from "../render";
import { state, id } from "./State";
import addClinicData from "./AddClinicData";

const AddClinicData = (title, phone, clinicInformation) => {
  const lines = state.myClinicPage.JSONForMyClinics[id];

  lines.clinicName = title;
  lines.clinicPhones = phone;
  lines.clinicInformation = clinicInformation;

  rerenderEntireTree({ state, id, addClinicData });
  console.log(state)
};

export default AddClinicData;
