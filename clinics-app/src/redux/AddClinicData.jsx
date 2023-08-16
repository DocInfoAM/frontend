import { rerenderEntireTree } from "../render";
import { clinics, id } from "./State";
import addClinicData from "./AddClinicData";

const AddClinicData = (title, phone, clinicInformation) => {
  const lines = clinics.myClinicPage.JSONForMyClinics[id];

  lines.clinicName = title;
  lines.clinicPhones = phone;
  lines.clinicInformation = clinicInformation;

  rerenderEntireTree({ clinics, id, addClinicData });
  console.log(clinics)
};

export default AddClinicData;
