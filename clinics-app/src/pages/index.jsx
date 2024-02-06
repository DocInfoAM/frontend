import { useLocation, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserProvider";

const Index = (props) => {
  const { authUser } = useUser();

  const [email, setEmail] = useState("user001@mail.com");
  const [password, setPassword] = useState("123456");

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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
      <button
        type={"button"}
        className={styles.loginButton}
        onClick={() => {
          authUser(email, password);
        }}
      >
        Вход
      </button>
      <div className={styles.cors_block}>
        <p>*for correctly app work you should add Allow CORS extensions for your browser:</p>
        <div className={styles.links_flex}>
          <a
            href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
            target="_blank"
          >
            <div>
              <img
                className={styles.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png"
              />
              <p>Chrome</p>
            </div>
          </a>
          <a href="https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/" target="_blank">
            <div>
              <img className={styles.logo} src="https://blog.mozilla.org/opendesign/files/2018/07/firefox-logo.png" />
              <p>Mozilla FireFox</p>
            </div>
          </a>
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag"
            target="_blank"
          >
            <div>
              <img className={styles.logo} src="https://soft-windows10.ru/img/_src/microsoft-edge-logo.png" />
              <p>Edge</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
