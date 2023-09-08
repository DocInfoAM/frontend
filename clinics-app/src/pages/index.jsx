import { useLocation, useNavigate } from "react-router-dom";
import CustomAuth from "../hooks/useAuth";
import styles from "./index.module.css";

const Index = () => {
  const { setAuth } = CustomAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/my-clinic";

  return (
    <div>
        <button
          type={"button"}
          className={styles.loginButton}
          onClick={() => {
            setAuth(true);
            navigate(from, { replace: true });
          }}
        >
          Login Clinic
        </button>
        
    </div>
  );
};

export default Index;
