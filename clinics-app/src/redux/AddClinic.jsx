import state from "./State";

const AddClinic = (title, photoURL, phone) => {
  state.myClinicPage.JSONForMyClinics.push({
    id: state.myClinicPage.JSONForMyClinics.length,
    photoURL: photoURL,
    clinicTitle: title,
    clinicPhone: phone,
  });
  console.log(state)
};

export default AddClinic