import styles from "./GetRequests.module.css";

const GetRequests = (props) => {
  return (
    <>
      <h2>Заявки для {props.clinics[props.clinicID].clinicName}</h2>
      {props.requests.map((request) => {
        if (request.clinic_id === props.clinicID) {
          return (
            <div key={request.clinic_id}>
              {request.requests.map((value) => {
                return (
                  <div className={styles.test_block} key={value.date_of_request + value.time_of_request}>
                    <div className={styles.patientInfo}>
                      <p>
                        Заявка от
                        <br />
                        пациента с ID: {value.patient_id}
                      </p>
                    </div>
                    <div className={styles.patientInfo}>
                      <p>Нужен обратный звонок: {value.is_callback_needed ? "Yes" : "No"}</p>
                      <p>Имя пациента: {value.patient_name}</p>
                      <p>Номер телефона: {value.phone_number}</p>
                      <p>Дата заявки: {value.date_of_request}</p>
                      <p>Время заявки: {value.time_of_request}</p>
                      <p>Комментарий пациента: {value.patients_commentary}</p>
                    </div>
                    <div className={styles.visitInfo}>
                      <p>
                        ID Врача:{" "}
                        {value.doctor_id ? value.doctor_id : <span style={{ color: "red" }}>Не назначен</span>}
                      </p>
                      <p>Дата визита: {value.date_of_visit}</p>
                      <p>Время визита: {value.time_of_visit}</p>
                      <p>Комментарий клиники: {value.clinics_commentary}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        } else {
          return <p key="no_new_requests">Новых заявок нет</p>;
        }
      })}
    </>
  );
};

export default GetRequests;
