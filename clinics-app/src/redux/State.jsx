const state = {
  myClinicPage: {
    JSONForMyClinics: [
      {
        id: 0,
        photoURL: "https://farkop.ru/no_photo.jpeg",
        clinicTitle: "Super clinic",
        clinicPhone: "+37400000020",
        description: "Some description about that clinic",
      },
      {
        id: 1,
        photoURL: "https://farkop.ru/no_photo.jpeg",
        clinicTitle: "Second clinic",
        clinicPhone: "+37444080404",
        description: "Other description, this is second clinic",
      },
      {
        id: 2,
        photoURL: "https://farkop.ru/no_photo.jpeg",
        clinicTitle: "Third clinic",
        clinicPhone: "+37444060375",
        description: "Other description, this is third clinic",
      },
    ],
  },
};

export const addClinic = (title, photoURL, phone) => {
  state.myClinicPage.JSONForMyClinics.push({
    id: state.myClinicPage.JSONForMyClinics.length,
    photoURL: photoURL,
    clinicTitle: title,
    clinicPhone: phone,
  });
  console.log(state);
};

export default state;
