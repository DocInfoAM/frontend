import Navigation from "./Navigation/Navigation";
import ChangeLanguages from "./ChangeLanguages/ChangeLanguages";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <a
        onClick={() => {
          navigate("/my-clinic");
        }}
      >
        <div className={styles.div_header_img}>
          <img
            id="logo"
            alt="logo"
            title="logo"
            style={{ width: 60, cursor: "pointer" }}
            src="./img/patient-clipart-patient-identification-19.png"
          />
          <h1 className={styles.logo_text}>DocInfo</h1>
        </div>
      </a>
      <Navigation />
      <ChangeLanguages />
    </header>
  );
};

export default Header;
