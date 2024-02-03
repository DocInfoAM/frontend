import { useLocation, useNavigate } from "react-router-dom";
import CustomAuth from "../hooks/useAuth";
import styles from "./index.module.css";
import React, { useState, useEffect } from "react";

// export const exportData = (data) => {
//   return data; // попытка экспортировать данные из этого компонента
// };

const Index = (props) => {
  const { setAuth } = CustomAuth();
  const [userDataFromServer, getUserDataFromServer] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/my-clinic";

  // забираем данные из инпутов, формируем запрос и отправляем на сервер
  async function getUserToken() {
    const userEmail = document.forms.login.login.value;
    const userPassword = document.forms.login.password.value;
    const paramsGetUserToken = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    };

    const res = await fetch("https://docinfoam-mvp-dev-server.vercel.app/api/auth/login", paramsGetUserToken)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data); // получаем ответ сервера и проверяем наличие токена
        if (data.accessToken) {
          getUserData(); // вызываем данные по пользователю
        }
      })
      .catch(function (error) {
        console.error("Ошибка:", error);
        return;
      });
  }

  // забираем емайл и по нему запрашиваем данные пользователя
  async function getUserData() {
    const userEmail = document.forms.login.login.value;
    const paramsGetUserData = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    };

    const userInformation = await fetch(
      `https://docinfoam-mvp-dev-server.vercel.app/api/user/${userEmail}`,
      paramsGetUserData
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data); // выводим данные в консоль
        getUserDataFromServer(data); // создаём переменную с данными пользователя
        console.log(userDataFromServer);
        // exportData(getUserDataFromServer(data));
        setAuth(true); // кастомную авторизацию в true
        navigate(from, { replace: true }); // делаем переадресацию на приватную страницу
      })
      .catch(function (error) {
        console.error("Ошибка:", error);
      });

    return userInformation;
  }

  return (
    <div className={styles.loginBlock}>
      <form name="login">
        <input
          className={styles.login_input}
          type="text"
          id="login"
          name="login"
          required
          minLength="4"
          maxLength="30"
          size="30"
          placeholder="email"
          autoComplete="username"
          value="user001@mail.com"
          onChange={() => {}}
        />
        <input
          className={styles.password_input}
          type="password"
          id="password"
          name="password"
          required
          minLength="4"
          maxLength="30"
          size="30"
          placeholder="password"
          autoComplete="current-password"
          value="123456"
          onChange={() => {}}
        />
      </form>
      <button type={"button"} className={styles.loginButton} onClick={getUserToken}>
        Вход
      </button>
    </div>
  );
};

export default Index;
