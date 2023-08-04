import { state, id } from "./State";

const AddClinicData = (title, phone, description) => {

  const lines = state.myClinicPage.JSONForMyClinics[id]

  lines.clinicTitle = title
  lines.clinicPhone = phone
  lines.description = description
  
  console.log(state);
};

export default AddClinicData;
