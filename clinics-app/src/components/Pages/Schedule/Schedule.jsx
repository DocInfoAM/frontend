import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div>
      <h2>Schedule</h2>
      <p>
        <Link to="/edit-schedule">Редактировать моё расписание</Link>
      </p>
      <p>
        <Link to="/personal-area">Личный кабинет врача</Link>
      </p>
      <p>
        <Link to="/all-doctors">Список врачей</Link>
      </p>
      <br />
      <br />
      <h2>Логика</h2>
      <p>Проверяем залогирован ли пользователь (по данным из браузера):</p>
      <p>
        Если <strong>"НЕТ"</strong> - перенаправляем на index.jsx (Страницу логина)
      </p>
      <p>
        Если <strong>"ДА"</strong> - делаем запрос на сервер, в ответе должны получить объект с данными о расписании с
        возможностью редактировать расписание вне зависимости от роли
      </p>
      <br />
      <br />
    </div>
  );
};

export default Schedule;
