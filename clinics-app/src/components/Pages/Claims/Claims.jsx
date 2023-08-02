import { Link } from "react-router-dom";

const Claims = () => {
  return (
    <div>
      <h2>Claims</h2>
      <p>
        <Link to="/all-doctors">Список врачей</Link>
      </p>
      <p>
        <Link to="/my-clinic">Страница моей клиники</Link>
      </p>
      <br />
      <br />
      <h2>Логика</h2>
      <p>Проверяем залогирован ли пользователь (по данным из браузера):</p>
      <p>
        Если <strong>"НЕТ"</strong> - перенаправляем на index.jsx (Страницу логина)
      </p>
      <p>
        Если <strong>"ДА"</strong> - делаем запрос на сервер, в ответе должны получить объект с данными о заявках,
        редактировать их может любой пользователь
      </p>
      <br />
      <br />
    </div>
  );
};

export default Claims;
