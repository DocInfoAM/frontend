import { useLocation, useNavigate } from "react-router-dom";
import CustomAuth from "../hooks/useAuth";
import styles from "./index.module.css";

const Index = (props) => {
  const { setAuth } = CustomAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/my-clinic";

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
        console.log(data);
        if (data.accessToken) {
          getUserData();
          setAuth(true);
          navigate(from, { replace: true });
        }
      })
      .catch(function (error) {
        console.error("Ошибка:", error);
        return;
      });
  }

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
        console.log(data);
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
