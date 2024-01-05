import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomAuth from "../../hooks/useAuth";

const SignOut = () => {
  const { setAuth } = CustomAuth();
  const navigate = useNavigate();
  const paramsReqForDeleteToken = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  async function reqForDeleteToken() {
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
  }

  useEffect(() => {
    reqForDeleteToken();
    setAuth(false);
    navigate("/");
  }, [setAuth, navigate]);

  return <h2>Sign Out and redirect to ./index.jsx</h2>;
};

export default SignOut;
