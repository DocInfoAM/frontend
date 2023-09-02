import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomAuth from "../../../hooks/useAuth";

const SignOut = () => {
  const { setAuth } = CustomAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(false);
    navigate("/");
  }, [setAuth, navigate]);

  return <h2>Sign Out and redirect to ./index.jsx</h2>;

};

export default SignOut;