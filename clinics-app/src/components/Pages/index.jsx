import { useLocation, useNavigate } from "react-router-dom";
import CustomAuth from './../../hooks/useAuth';

const Index = () => {
  const { setAuth } = CustomAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.pathname || "/";

  return (
    <div>
      <>
        <div>Login</div>
        <button
          type={"button"}
          onClick={() => {
            setAuth(true);
            navigate(from, { replace: true });
          }}
        >
          Login
        </button>
      </>
      <h2>index.jsx (Login screen)</h2>
      <p>Содержит поля для ввода логина и пароля</p>
      <br />
      <br />
      <h2>Логика</h2>
      <p>Страница при загрузке должна понять залогирован пользователь или нет (храним в локал сторедж?).</p>
      <p>
        <strong>Если "ДА"</strong>, то делаем редирект на стартовую страницу:
      </p>
      <p>для администратора клиники - страница с заявками в ожидании</p>
      <p>для врача клиники - страница с расписанием врача</p>
      <p>
        <strong>Если "НЕТ"</strong>, то открываем форму для ввода логина и пароля
      </p>
      <br />
      <br />
      <h3>После ввода логина и пароля</h3>
      <p>При нажатии на кнопку "Войти" мы отправляем запрос на сервер и получаем ответ:</p>
      <p>
        <strong>Если пользователь найден и данные верны</strong>, то сохраняем это в локал сторедж? и перенаправляем
        пользователя на стартовую страницу:
      </p>
      <p>для администратора клиники - страница с заявками в ожидании</p>
      <p>для врача клиники - страница с расписанием врача</p>
      <p>
        <strong>Если пользователь НЕ найден или данные неверны</strong>, то пишем сообщение, что данные не верны?
      </p>
    </div>
  );
};

export default Index;
