import React from "react";
import { Link } from "react-router-dom";
import GetClinicData from "../../components/GetClinicData/GetClinicData";
import { exportData } from "./../index";

const MyClinic = (props) => {
  return (
    <div>
      <GetClinicData />
      <div>
        <h3>Ссылки</h3>
        {/* <p>{console.log(exportData)}</p> */}
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
