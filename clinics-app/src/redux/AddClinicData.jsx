import { rerenderEntireTree } from "../render";
import { state, id } from "./State";
import addClinicData from "./AddClinicData";

const AddClinicData = (title, phone, description) => {
  const lines = state.myClinicPage.JSONForMyClinics[id];

  lines.clinicTitle = title;
  lines.clinicPhone = phone;
  lines.description = description;

  rerenderEntireTree({ state, id, addClinicData });
};

export default AddClinicData;
