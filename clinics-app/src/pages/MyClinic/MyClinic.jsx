import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyClinic.module.css";
import GetData from "./components/GetData/GetData";

const MyClinic = (props) => {
  return (
    <div>
      <GetData clinics={props.clinics} clinicSchedule={props.clinicSchedule} />
      <br />
      <br />
      <div>
        <h3>Ссылки</h3>
        <p>
          <Link to="/statistics">Статистика по клинике</Link>
        </p>
        <p>
          <Link to="/account-balance">Баланс клиники</Link>
        </p>
      </div>
    </div>
  );
};

export default MyClinic;
