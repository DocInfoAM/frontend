import { Link } from "react-router-dom";

const Claims = () => {
  return (
    <div>
      <h2>Claims</h2>
      <p><Link to="/all-doctors">Список врачей</Link></p>
      <p><Link to="/my-clinic">Страница моей клиники</Link></p>
    </div>
  );
};

export default Claims;
