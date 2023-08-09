const getClinics = async () => {
   const res = await fetch(
     "https://mock-server-docinfo.onrender.com/clinics"
    );
  return await res.json();
  };
  
   const clinicList = await getClinics()
// const clinicList =  [
//     {
//       id: 0,
//       photoURL: "https://www.svgrepo.com/show/97385/no-photo.svg",
//       clinicName: "Super clinic",
//       clinicSpecialisation: "Specialisation one",
//       clinicRate: 10,
//       clinicPhones: ["+37400000020 ", "+37400000021 ", "+37400000022 "],
//       clinicAddress: {
//         textAddress: {
//           city: "Yerevan",
//           street: "Abovyan street",
//           building: 7,
//           floor: 1,
//         },
//         coordinates: ["55.10101", "43.30303"],
//       },
//       clinicSocialNetworks: [
//         "https://instagram.com/myclinic",
//         "https://facebook.com/myclinic",
//         "https://somenetwork.com/myclinic",
//       ],
//       minimalPrice: 200,
//       clinicServices: [
//         {
//           service: "Dental",
//           price: 1000,
//         },
//         {
//           service: "Headache",
//           price: 2000,
//         },
//       ],
//       clinicTags: ["dental ", "head ", "legs "],
//       clinicInformation: "Some description about that clinic",
//     },
//     {
//       id: 1,
//       photoURL: "https://www.svgrepo.com/show/97385/no-photo.svg",
//       clinicName: "Second clinic",
//       clinicSpecialisation: "Specialisation two",
//       clinicRate: 9,
//       clinicPhones: ["+37400004567 ", "+37400004568 ", "+37400004569 "],
//       clinicAddress: {
//         textAddress: {
//           city: "Yerevan",
//           street: "Adana street",
//           building: 10,
//           floor: 2,
//         },
//         coordinates: ["55.11101", "43.30999"],
//       },
//       clinicSocialNetworks: ["https://instagram.com/myclinic", "https://facebook.com/myclinic"],
//       minimalPrice: 1200,
//       clinicServices: [
//         {
//           service: "Fingers",
//           price: 100,
//         },
//         {
//           service: "Foots",
//           price: 1000,
//         },
//       ],
//       clinicTags: ["fingers ", "foots ", "legs "],
//       clinicInformation: "Some description about second clinic",
//     },
//     {
//       id: 2,
//       photoURL: "https://www.svgrepo.com/show/97385/no-photo.svg",
//       clinicName: "Third clinic",
//       clinicSpecialisation: "Specialisation three",
//       clinicRate: 10,
//       clinicPhones: ["+37400001290 ", "+374000001291 ", "+37400001292 "],
//       clinicAddress: {
//         textAddress: {
//           city: "Yerevan",
//           street: "Mashtotsa street",
//           building: 1,
//           floor: 3,
//         },
//         coordinates: ["55.11555", "43.77799"],
//       },
//       clinicSocialNetworks: [],
//       minimalPrice: 2000,
//       clinicServices: [
//         {
//           service: "Dogs",
//           price: 100,
//         },
//         {
//           service: "Cats",
//           price: 200,
//         },
//       ],
//       clinicTags: ["dogs ", "cats "],
//       clinicInformation: "Some description about third clinic",
//     },
//   ]
console.log(clinicList)

const Clinics = () => {
    return (
        <>
        <p>результаты поиска:</p>
    {
            clinicList.map((clinic)=> {
                return (<>
                    <div>Номер клиники: {clinic.id} </div>
                    <div>Название клиники: {clinic.clinicName}</div>
                    <div>Описание клиники: {clinic.clinicInformation}</div>
                    <div>Адрес: <br />Город: {clinic.clinicAddress.textAddress.city}, Улица: {clinic.clinicAddress.textAddress.street}, Дом: {clinic.clinicAddress.textAddress.building}, Этаж: {clinic.clinicAddress.textAddress.floor}<br /> Координаты: {clinic.clinicAddress.coordinates}</div>
                    <div>Номера телефонов: {clinic.clinicPhones}</div>
                    <div>Рейтинг: {clinic.clinicRate}</div>
                    <div>Соцсети: {clinic.clinicSocialNetworks.join(' ')}</div>
                    <div>Минимальная стоимость за услугу: {clinic.minimalPrice}</div>
                    <div>Услуги: {clinic.clinicServices.map((services)=> {return(<><br/>{services.service} {services.price}</>)})}</div>
                    <div>Тэги: {clinic.clinicTags}</div>
              <br /> </> )
            })
    }
    </>
    )
}

export default Clinics;