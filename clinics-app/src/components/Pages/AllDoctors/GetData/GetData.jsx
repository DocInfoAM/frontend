import styles from "./GetData.module.css";
import { doctorsSchedule } from './../../../../redux/State';
import GetReview from "./GetReview";

const getData = (props) => {
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
      {props.doctors.map((doctor) => {
        return (
          <div className={styles.test_block} key={doctor.id}>
            <div id={doctor.id} className={styles.data_block}>
              <div className={styles.info}>
                <img
                  src="./img/nophoto.jpg"
                  alt={doctor.name}
                  title={doctor.name}
                  className={styles.img} 
                ></img>
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
              <GetReview doctorsSchedule={props.doctorsSchedule} doctorID={doctor.id} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default getData;
