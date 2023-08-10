import classes from "./GetData.module.css";

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
          <div className={classes.test_block} key={doctor.id}>
            <div id={doctor.id} className={classes.data_block}>
              <div className={classes.info}>
                <img
                  src="https://www.svgrepo.com/show/97385/no-photo.svg"
                  alt={doctor.name}
                  title={doctor.name}
                  className={classes.img}
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
                  <p>Aditional Specialisations: {dataParserForSimpleArray(doctor.additional_specialisations)}</p>
                  <p>Disease Tags: {dataParserForSimpleArray(doctor.disease_tags)}</p>
                  <p>Working Schedule: {dataParserForSimpleArray(doctor.workingSchedule)}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default getData;
