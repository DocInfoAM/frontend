import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

    const paramsGetUserToken = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    };

    const tokenFromServer = await fetch(
      "https://docinfoam-mvp-dev-server.vercel.app/api/auth/login",
      paramsGetUserToken
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error("Ошибка:", error);
        return;
      });

    const paramsGetUserData = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    };

    const userInformation = await fetch(
      `https://docinfoam-mvp-dev-server.vercel.app/api/user/${email}`,
      paramsGetUserData
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        setUser({ id: data.id, email: data.email, roles: data.roles, phone: data.phone });
        navigate(from, { replace: true }); // делаем переадресацию на приватную страницу
      })
      .catch(function (error) {
        console.error("Ошибка:", error);
      });

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

    const paramsReqForDeleteToken = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    };

    const req = await fetch("https://docinfoam-mvp-dev-server.vercel.app/api/auth/logout", paramsReqForDeleteToken)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
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
