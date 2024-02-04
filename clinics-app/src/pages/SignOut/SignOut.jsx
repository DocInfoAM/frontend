import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserProvider";

const SignOut = () => {
  const navigate = useNavigate();
  const { getOut } = useUser();

  getOut().then(
    useEffect(() => {
      navigate("/");
    }, [navigate])
  );

  return <h2>Sign Out and redirect to ./index.jsx</h2>;
};

export default SignOut;
