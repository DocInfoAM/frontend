export const clinicID = 0;

const getClinics = async () => {
  const res = await fetch("https://mock-server-docinfo.onrender.com/clinics");
  return await res.json();
};

const getDoctors = async () => {
  const res = await fetch("https://mock-server-docinfo.onrender.com/doctors");
  return await res.json();
};

const registerNewUser = async () => {
  const res = await fetch("https://docinfoam-mvp-dev-server.vercel.app/api/auth/register");
  return await res.json();
};

const getClinicSchedule = async () => {
  const res = await fetch("https://mock-server-docinfo.onrender.com/clinicsreviews");
  return await res.json();
};

const getDoctorsSchedule = async () => {
  const res = await fetch("https://mock-server-docinfo.onrender.com/doctorsreviews");
  return await res.json();
};

const getRequests = async () => {
  const res = await fetch("https://mock-server-docinfo.onrender.com/requests");
  return await res.json();
};

// export const doctorsSchedule = await getDoctorsSchedule();
// export const clinicSchedule = await getClinicSchedule();
export const doctors = await getDoctors();
export const clinics = await getClinics();
// export const requests = await getRequests();
// export const newUser = await registerNewUser();

// If server is broken

// export const doctorsSchedule = [
//   {
//     doctor_id: 0,
//  !! -   clinic_id: 0,
//     reviews: [
//       {
//         patient_id: "PATIENT001",
//         phone_number: "+374-41-720001",
//         date_of_review: "2023-08-16",
//         date_of_visit: "2023-08-10",
//         text_of_review: "Dr. Smith was very knowledgeable and provided excellent care.",
//         rating: 5,
//       },
//       {
//         patient_id: "PATIENT002",
//         phone_number: "+374-41-720002",
//         date_of_review: "2023-08-15",
//         date_of_visit: "2023-08-12",
//         text_of_review: "I had a positive experience with Dr. Smith. He explained everything clearly.",
//         rating: 4,
//       },
//     ],
//   },
//   {
//     doctor_id: 1,
//     clinic_id: 1,
//     reviews: [
//       {
//         patient_id: "PATIENT003",
//         phone_number: "+374-41-720003",
//         date_of_review: "2023-08-14",
//         date_of_visit: "2023-08-09",
//         text_of_review: "Dr. Johnson was attentive and caring throughout the appointment.",
//         rating: 5,
//       },
//     ],
//   },
//   {
//     doctor_id: 2,
//     clinic_id: 1,
//     reviews: [
//       {
//         patient_id: "PATIENT004",
//         phone_number: "+374-41-720004",
//         date_of_review: "2023-08-13",
//         date_of_visit: "2023-08-11",
//         text_of_review: "I was disappointed with the service provided by Dr. Wilson.",
//         rating: 2,
//       },
//     ],
//   },
//   {
//     doctor_id: 3,
//     clinic_id: 0,
//     reviews: [
//       {
//         patient_id: "PATIENT005",
//         phone_number: "+374-41-720005",
//         date_of_review: "2023-08-12",
//         date_of_visit: "2023-08-08",
//         text_of_review: "Dr. Brown was friendly and took the time to address my concerns.",
//         rating: 4,
//       },
//     ],
//   },
//   {
//     doctor_id: 4,
//     clinic_id: 2,
//     reviews: [
//       {
//         patient_id: "PATIENT006",
//         phone_number: "+374-41-720006",
//         date_of_review: "2023-08-11",
//         date_of_visit: "2023-08-07",
//         text_of_review: "Dr. Davis provided excellent care and was very thorough.",
//         rating: 5,
//       },
//     ],
//   },
// ];

// export const getClinicSchedule = [
//   {
//     clinic_id: 0,
//     reviews: [
//       {
//         patient_id: "PATIENT001",
//         phone_number: "+374-41-720001",
//         date_of_review: "2023-08-16",
//         date_of_visit: "2023-08-10",
//         text_of_review:
//           "I had a great experience at this clinic. The staff was friendly and the facilities were clean.",
//         rating: 4,
//       },
//       {
//         patient_id: "PATIENT002",
//         phone_number: "+374-41-720002",
//         date_of_review: "2023-08-15",
//         date_of_visit: "2023-08-12",
//         text_of_review:
//           "I was quite satisfied with the service I received. The doctor was knowledgeable and attentive.",
//         rating: 5,
//       },
//     ],
//   },
//   {
//     clinic_id: 1,
//     reviews: [
//       {
//         patient_id: "PATIENT003",
//         phone_number: "+374-41-720003",
//         date_of_review: "2023-08-14",
//         date_of_visit: "2023-08-09",
//         text_of_review: "I had a positive experience at this clinic. The treatment I received was effective.",
//         rating: 4,
//       },
//     ],
//   },
//   {
//     clinic_id: 2,
//     reviews: [
//       {
//         patient_id: "PATIENT004",
//         phone_number: "+374-41-720004",
//         date_of_review: "2023-08-13",
//         date_of_visit: "2023-08-11",
//         text_of_review: "I had a disappointing experience at this clinic. The staff was not very helpful.",
//         rating: 2,
//       },
//     ],
//   },
// ];

// export const doctors = [
//   {
//  !! +   doctor_id: 0,
//  !! +   clinic_id: 0,
//     name: "Dr. Sarah Johnson",
//     email: "sarah.johnson@example.com",
//  !! -  clinic: {
//       name: "City Medical Center",
//       address: { city: "Los Angeles", street: "Main Street", building: 456, floor: 3 },
//     },
//     experience: "15 years",
//     rate: 4.9,
//     specialisation: "Dermatologist",
//     price_for_visit: 200,
//     additional_services: [
//       { service: "Skin Allergy Testing", price: 50 },
//       { service: "Laser Treatment", price: 100 },
//     ],
//     additional_specialisations: ["Cosmetic Dermatology"],
//     disease_tags: ["Acne", "Psoriasis"],
//     workingSchedule: ["Sn", "Mn", "Fr", "St"],
//   },
//   {
//     id: 1,
//     name: "Dr. Michael Lee",
//     email: "michael.lee@example.com",
//     clinic: {
//       name: "Healthy Life Clinic",
//       address: { city: "Chicago", street: "Oak Street", building: 789, floor: 2 },
//     },
//     experience: "12 years",
//     rate: 4.7,
//     specialisation: "Orthopedic Surgeon",
//     price_for_visit: 250,
//     additional_services: [
//       { service: "Joint Replacement", price: 150 },
//       { service: "Fracture Care", price: 100 },
//     ],
//     additional_specialisations: ["Sports Medicine"],
//     disease_tags: ["Arthritis", "Sports Injuries"],
//     workingSchedule: ["Sn", "Mn", "Fr", "St"],
//   },
//   {
//     id: 2,
//     name: "Dr. Emily Williams",
//     email: "emily.williams@example.com",
//     clinic: { name: "Sunshine Pediatrics", address: { city: "Miami", street: "Palm Avenue", building: 123, floor: 1 } },
//     experience: "8 years",
//     rate: 4.8,
//     specialisation: "Pediatrician",
//     price_for_visit: 150,
//     additional_services: [
//       { service: "Vaccinations", price: 30 },
//       { service: "Wellness Checkup", price: 60 },
//     ],
//     additional_specialisations: ["Neonatology"],
//     disease_tags: ["Childhood Infections", "Developmental Disorders"],
//     workingSchedule: ["Sn", "Mn", "Fr", "St"],
//   },
//   {
//     id: 3,
//     name: "Dr. Robert Anderson",
//     email: "robert.anderson@example.com",
//     clinic: {
//       name: "Eyesight Care Clinic",
//       address: { city: "Seattle", street: "Vision Street", building: 567, floor: 4 },
//     },
//     experience: "18 years",
//     rate: 4.9,
//     specialisation: "Ophthalmologist",
//     price_for_visit: 180,
//     additional_services: [
//       { service: "Cataract Surgery", price: 100 },
//       { service: "Laser Vision Correction", price: 150 },
//     ],
//     additional_specialisations: ["Retina Specialist"],
//     disease_tags: ["Glaucoma", "Retinal Diseases"],
//     workingSchedule: ["Sn", "Mn", "Fr", "St"],
//   },
//   {
//     id: 4,
//     name: "Dr. David Martin",
//     email: "david.martin@example.com",
//     clinic: {
//       name: "Heartbeat Cardiology",
//       address: { city: "Houston", street: "Pulse Avenue", building: 234, floor: 2 },
//     },
//     experience: "20 years",
//     rate: 4.9,
//     specialisation: "Cardiologist",
//     price_for_visit: 300,
//     additional_services: [
//       { service: "Cardiac Stress Test", price: 100 },
//       { service: "Echocardiography", price: 150 },
//     ],
//     additional_specialisations: ["Interventional Cardiology"],
//     disease_tags: ["Heart Disease", "Hypertension"],
//     workingSchedule: ["Sn", "Mn", "Fr", "St"],
//   },
// ];

// export const clinics = [
//   {
//     id: 0,
//     photoURL: "./img/nophoto.jpg",
//     clinicName: "Super clinic",
//     clinicSpecialisation: "Specialisation one",
//     clinicRate: 10,
//     clinicPhones: ["+37400000020", "+37400000021", "+37400000022"],
//     clinicAddress: {
//       textAddress: {
//         city: "Yerevan",
//         street: "Abovyan street",
//         building: 7,
//         floor: 1,
//       },
//       coordinates: ["55.10101", "43.30303"],
//     },
//     clinicSocialNetworks: [
//       "https://instagram.com/myclinic",
//       "https://facebook.com/myclinic",
//       "https://somenetwork.com/myclinic",
//     ],
//     minimalPrice: 200,
//     clinicServices: [
//       {
//         service: "Dental",
//         price: 1000,
//       },
//       {
//         service: "Headache",
//         price: 2000,
//       },
//     ],
//     clinicTags: ["dental", "head", "legs"],
//     clinicInformation: "Some description about that clinic",
//   },
//   {
//     id: 1,
//     photoURL: "./img/nophoto.jpg",
//     clinicName: "Second clinic",
//     clinicSpecialisation: "Specialisation two",
//     clinicRate: 9,
//     clinicPhones: ["+37400004567", "+37400004568", "+37400004569"],
//     clinicAddress: {
//       textAddress: {
//         city: "Yerevan",
//         street: "Adana street",
//         building: 10,
//         floor: 2,
//       },
//       coordinates: ["55.11101", "43.30999"],
//     },
//     clinicSocialNetworks: ["https://instagram.com/myclinic", "https://facebook.com/myclinic"],
//     minimalPrice: 1200,
//     clinicServices: [
//       {
//         service: "Fingers",
//         price: 100,
//       },
//       {
//         service: "Foots",
//         price: 1000,
//       },
//     ],
//     clinicTags: ["fingers", "foots", "legs"],
//     clinicInformation: "Some description about second clinic",
//   },
//   {
//     id: 2,
//     photoURL: "./img/nophoto.jpg",
//     clinicName: "Third clinic",
//     clinicSpecialisation: "Specialisation three",
//     clinicRate: 10,
//     clinicPhones: ["+37400001290", "+374000001291", "+37400001292"],
//     clinicAddress: {
//       textAddress: {
//         city: "Yerevan",
//         street: "Mashtotsa street",
//         building: 1,
//         floor: 3,
//       },
//       coordinates: ["55.11555", "43.77799"],
//     },
//     clinicSocialNetworks: [],
//     minimalPrice: 2000,
//     clinicServices: [
//       {
//         service: "Dogs",
//         price: 100,
//       },
//       {
//         service: "Cats",
//         price: 200,
//       },
//     ],
//     clinicTags: ["dogs", "cats"],
//     clinicInformation: "Some description about third clinic",
//   },
// ];

// export const requests = [
//   {
//  !! -  request_id: 0,
//  !! -   clinic_id: 0,
//  !! -   requests: [
//  !! -     {
//  !! +      clinic_id: 0,
//  !! +      doctor_id: 1,
//  !! +      request_id: 0,
//  !! +      active: true,
//         patient_id: "PATIENT001",
//         is_callback_needed: true,
//         patient_name: "Joe Dow",
//         phone_number: "+374-41-720001",
//         date_of_request: "2023-08-16",
//         time_of_request: "20-22",
//         date_of_visit: "2023-08-22",
//         time_of_visit: "16-00",
//         doctor_id: 1,
//         patients_commentary: "",
//         clinics_commentary: "",
//       },
//       {
//         patient_id: "PATIENT001",
//         is_callback_needed: true,
//         patient_name: "Joe Dow",
//         phone_number: "+374-41-720001",
//         date_of_request: "2023-08-17",
//         time_of_request: "16-22",
//         date_of_visit: "",
//         time_of_visit: "",
//         doctor_id: null,
//         patients_commentary: "Need consultation with choosing a doctor",
//         clinics_commentary: "",
//       },
//     ],
//   },
// ];
