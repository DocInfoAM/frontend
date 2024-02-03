import { Link } from "react-router-dom";
import GetRequests from "../../components/GetRequests/GetRequests";

const Requests = (props) => {
  return (
    <div>
      <GetRequests />
      <br />
      <br />
      <h2>Ссылки:</h2>
      <p>
        <Link to="/all-doctors">Список врачей</Link>
      </p>
      <p>
        <Link to="/my-clinic">Страница моей клиники</Link>
      </p>
    </div>
  );
};

export default Requests;
