import { Link } from "react-router-dom";

const Claims = () => {
  return (
    <div>
      <h2>Claims</h2>
      <p><Link to="/alldoctors">Список врачей</Link></p>
      <p><Link to="/myclinic">Страница моей клиники</Link></p>
    </div>
  );
};

export default Claims;
