import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div>
      <h2>Schedule</h2>
      <p><Link to="/editschedule">Редактировать моё расписание</Link></p>
      <p><Link to="/personalarea">Личный кабинет врача</Link></p>
      <p><Link to="/alldoctors">Список врачей</Link></p>
    </div>
  );
};

export default Schedule;
