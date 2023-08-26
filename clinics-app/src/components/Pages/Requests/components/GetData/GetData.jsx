import styles from "./GetData.module.css";

const GetData = (props) => {
  return (
    <>
      {props.requests.map((request) => {
        return (
          <div key={request.requests[0].request_id}>
            <p>ID Клиники: {request.clinic_id}</p>
            <p>Заявки:</p>
            <div>
              {request.requests.map((value) => {
                return (
                  <div className={styles.test_block} key={value.date_of_request + value.time_of_request}>
                    <p>Пациент ID: {value.patient_id}</p>
                    <div className={styles.patientInfo}>
                      <p>Нужен обратный звонок: {value.is_callback_needed ? "Yes" : "No"}</p>
                      <p>Имя пациента: {value.patient_name}</p>
                      <p>Номер телефона: {value.phone_number}</p>
                      <p>Дата заявки: {value.date_of_request}</p>
                      <p>Время заявки: {value.time_of_request}</p>
                    </div>
                    <div className={styles.visitInfo}>
                      <p>ID Врача: {value.doctor_id ? value.doctor_id : <span style={{color: 'red'}}>"Не назначен"</span>}</p>
                      <p>Дата визита: {value.date_of_visit}</p>
                      <p>Время визита: {value.time_of_visit}</p>
                      <p>Комментарий пациента: {value.patients_commentary}</p>
                      <p>Комментарий клиники: {value.clinics_commentary}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GetData;
