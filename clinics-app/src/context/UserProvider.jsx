import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import SecureLS from "secure-ls";

// Функции для работы с токенами
const ls = new SecureLS();
export const saveTokenToLocalStorage = (token) => {
  ls.set("token", token);
};
export const getTokenFromLocalStorage = () => {
  return ls.get("token");
};
export const clearTokenFromLocalStorage = () => {
  ls.remove("token");
};

// Описание данных для контекста
const initialValue = {
  id: "",
  email: "",
  roles: [],
  authUser: () => "",
  isLoading: false,
  getOut: () => "",
};

const UserContext = createContext(initialValue);

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/my-clinic";
  const [user, setUser] = useState({ ...initialValue });

  const authUser = async (email, pass) => {
    setUser((oldValue) => {
      return {
        ...oldValue,
        isLoading: true,
      };
    });

    // const paramsGetUserToken = {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: pass,
    //   }),
    //   credentials: "include",
    // };

    const tokenFromServer = await axios
      .post(
        "https://docinfoam-mvp-dev-server.vercel.app/api/auth/login",
        { email: email, password: pass },
        { withCredentials: true }
      )
      .then(function (token) {
        saveTokenToLocalStorage(token.data.accessToken);
        console.log(ls.get("token"));
      })
      .catch(function (error) {
        console.error("Ошибка:", error);
        return;
      });

    // const tokenFromServer = await fetch("https://docinfoam-mvp-server.vercel.app/api/auth/login", paramsGetUserToken)
    //   .then(function (res) {
    //     return res.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.error("Ошибка:", error);
    //     return;
    //   });

    // const paramsGetUserData = {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   credentials: "include",
    // };

    const userInformation = await axios
      .get(`https://docinfoam-mvp-dev-server.vercel.app/api/user/${email}`, { withCredentials: true })
      .then(function (data) {
        data = data.data;
        setUser({ id: data.id, email: data.email, roles: data.roles, phone: data.phone });
        navigate(from, { replace: true }); // делаем переадресацию на приватную страницу
      })
      .catch(function (error) {
        console.error("Ошибка:", error);
        return;
      });

    // const userInformation = await fetch(`https://docinfoam-mvp-server.vercel.app/api/user/${email}`, paramsGetUserData)
    //   .then(function (res) {
    //     return res.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //     setUser({ id: data.id, email: data.email, roles: data.roles, phone: data.phone });
    //     navigate(from, { replace: true }); // делаем переадресацию на приватную страницу
    //   })
    //   .catch(function (error) {
    //     console.error("Ошибка:", error);
    //   });

    setUser((oldValue) => {
      return {
        ...oldValue,
        isLoading: false,
      };
    });
  };

  const getOut = async () => {
    setUser(() => {
      return {
        ...initialValue,
        isLoading: true,
      };
    });

    // const paramsReqForDeleteToken = {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   credentials: "include",
    // };

    // const req = await fetch("https://docinfoam-mvp-server.vercel.app/api/auth/logout", paramsReqForDeleteToken)
    //   .then(function (res) {
    //     return res.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //   })
    //   .catch(function (error) {
    //     console.error("Ошибка:", error);
    //     return;
    //   });

    const reqForDeleteToken = await axios
      .get("https://docinfoam-mvp-dev-server.vercel.app/api/auth/logout", { withCredentials: true })
      .then(function (data) {
        console.log(data.data);
      })
      .catch(function (error) {
        console.error("Ошибка:", error);
        return;
      });

    setUser(() => {
      return {
        ...initialValue,
      };
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...user,
        authUser,
        getOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
