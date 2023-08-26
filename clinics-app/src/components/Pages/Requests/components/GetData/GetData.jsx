import styles from "./GetData.module.css";

const GetData = (props) => {
  return (
    <div>
      {props.requests.map((request) => {
        return (
          <>
            <p>ID Клиники: {request.clinic_id}</p>
            <p>Заявки:</p>
            <div>
              {request.requests.map((value) => {
                return (
                  <div className={styles.test_block}>
                    <p>Пациент ID: {value.patient_id}</p>
                    <p>Нужен обратный звонок: {value.is_callback_needed ? "Yes" : "No"}</p>
                    <p>Имя пациента: {value.patient_name}</p>
                    <p>Номер телефона: {value.phone_number}</p>
                    <p>Дата заявки: {value.date_of_request}</p>
                    <p>Время заявки: {value.time_of_request}</p>
                    <p>Дата визита: {value.date_of_visit}</p>
                    <p>Время визита: {value.time_of_visit}</p>
                    <p>ID Врача: {value.doctor_id}</p>
                    <p>Комментарий пациента: {value.patients_commentary}</p>
                    <p>Комментарий клиники: {value.clinics_commentary}</p>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GetData;
