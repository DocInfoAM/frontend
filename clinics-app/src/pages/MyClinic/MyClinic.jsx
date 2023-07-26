import { Link } from "react-router-dom";
import classes from "./MyClinic.module.css";

const MyClinic = () => {
  return (
    <div>
      <p>My clinic page</p>
      <p><Link to="/statistics">Статистика по клинике</Link></p>
      <p><Link to="/accountbalance">Баланс клиники</Link></p>
    </div>
  );
};

export default MyClinic;
