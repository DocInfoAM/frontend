import { Link } from "react-router-dom";
import classes from "./Claims.module.css";

const Claims = () => {
  return (
    <div>
      <p>Claims</p>
      <p><Link to="/alldoctors">Список врачей</Link></p>
      <p><Link to="/myclinic">Страница моей клиники</Link></p>
    </div>
  );
};

export default Claims;
