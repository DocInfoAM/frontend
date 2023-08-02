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
      { id: 0, photoURL: "photo url", clinicTitle: "clinic title", clinicPhone: "+37400000000" },
      { id: 2, photoURL: "text", clinicTitle: "clinic text", clinicPhone: "+3743333" },
    ],
  },
};

export const addClinic = (phone) => {
  state.myClinicPage.JSONForMyClinics.push({
    id: 1,
    photoURL: "photo url 2",
    clinicTitle: "clinic title 2",
    clinicPhone: phone,
  });
  console.log(state);
};

export default state;
