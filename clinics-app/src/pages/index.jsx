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
    </div>
  );
};

export default Index;
