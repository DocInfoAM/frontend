import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div>
      <h2>Schedule</h2>
      <p><Link to="/edit-schedule">Редактировать моё расписание</Link></p>
      <p><Link to="/personal-area">Личный кабинет врача</Link></p>
      <p><Link to="/all-doctors">Список врачей</Link></p>
    </div>
  );
};

export default Schedule;
