import classes from "./GetData.module.css";

const getData = (props) => {
  const id = 2;
  const clinic = props.JSONForMyClinics[id];

  return (
    <div className={classes.test_block}>
      <div id={clinic.id} className={classes.data_block}>
        <h4>Клиника c id = {clinic.id}</h4>
        <div className={classes.info}>
          <img src={clinic.photoURL} alt={clinic.clinicTitle} title={clinic.clinicTitle} width="150px" />
          <div>
            <p>Название: {clinic.clinicTitle}</p>
            <p>Телефон: {clinic.clinicPhone}</p>
            <p>Описание: {clinic.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getData;
