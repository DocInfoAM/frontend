import styles from "./GetAllDoctorsData.module.css";
import Review from "../Review/Review";

const GetAllDoctorsData = (props) => {
  const dataParserForAdditionalServices = (data) => {
    return data.map((x) => (
      <span key={x.service}>
        <br />
        {x.service} - {x.price} драм
      </span>
    ));
  };

  const dataParserForSimpleArray = (data) => {
    return data.map((x) => (
      <span key={x}>
        <br />
        {x}
      </span>
    ));
  };

  return (
    <>
      {/* {props.doctors.map((doctor) => { */}
      {/* return ( */}
      <div className={styles.test_block}>
        some text
        {/* <img src="./img/nophoto.jpg" alt={doctor.name} title={doctor.name} className={styles.img}></img>
            <div id={doctor.id} className={styles.data_block}>
              <div className={styles.info}>
                <div>
                  <h4>Name: {doctor.name}</h4>
                  <p>Email: {doctor.email}</p>
                  <p>Clinic: {doctor.clinic.name}</p>
                  <p>
                    Address: {doctor.clinic.address.city}, {doctor.clinic.address.street}, дом{" "}
                    {doctor.clinic.address.building}, {doctor.clinic.address.floor} этаж
                  </p>
                  <p>Experience: {doctor.experience}</p>
                  <p>Rate: {doctor.rate}</p>
                  <p>Specialisation: {doctor.specialisation}</p>
                  <p>Price: {doctor.price_for_visit}</p>
                  <p>Additional Services: {dataParserForAdditionalServices(doctor.additional_services)}</p>
                  <p>Additional Specialisations: {dataParserForSimpleArray(doctor.additional_specialisations)}</p>
                  <p>Disease Tags: {dataParserForSimpleArray(doctor.disease_tags)}</p>
                  <p>Working Schedule: {dataParserForSimpleArray(doctor.workingSchedule)}</p>
                </div>
              </div>
              <h4>Отзывы:</h4>
            </div> */}
      </div>
      {/* );
      })} */}
    </>
  );
};

export default GetAllDoctorsData;
