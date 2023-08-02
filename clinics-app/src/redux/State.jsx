let state = {
  globalData: {
    navItems: [
      { name: "Моя клиника", url: "/my-clinic", id: "MyClinic" },
      { name: "Заявки", url: "/claims", id: "Claims" },
      { name: "Расписание врача", url: "/schedule", id: "Schedule" },
      { name: "Личный кабинет врача", url: "/personal-area", id: "PersonalArea" },
      { name: "Все врачи", url: "/all-doctors", id: "AllDoctors" },
      { name: "Контакты", url: "/contacts", id: "Contacts" },
      { name: "Выход", url: "/sign-out", id: "SignOut" },
    ],
  },
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
