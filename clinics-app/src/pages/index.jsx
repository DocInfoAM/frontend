import { useLocation, useNavigate } from "react-router-dom";
import CustomAuth from "../hooks/useAuth";
import styles from "./index.module.css";

const Index = (props) => {
  const { setAuth } = CustomAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/my-clinic";

  return (
    <div className={styles.loginBlock}>
      <form>
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
        />
      </form>
      <button
        type={"button"}
        className={styles.loginButton}
        onClick={async () => {
          const params = {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              email: "user001@mail.com",
              password: "123456",
            }),
          };
          const res = await fetch("https://docinfoam-mvp-dev-server.vercel.app/api/auth/login", params)
            .then(function (res) {
              return res.json();
            })
            .then(function (data) {
              console.log(data);
            })
            .catch(function (error) {
              console.error("Ошибка:", error);
            });
        }}
      >
        Вход
      </button>
    </div>
  );
};

export default Index;
