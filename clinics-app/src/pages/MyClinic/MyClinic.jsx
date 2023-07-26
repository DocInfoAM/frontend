import { Link } from "react-router-dom";

const MyClinic = () => {
  return (
    <div>
      <h2>My clinic page</h2>
      <p><Link to="/statistics">Статистика по клинике</Link></p>
      <p><Link to="/accountbalance">Баланс клиники</Link></p>
    </div>
  );
};

export default MyClinic;
