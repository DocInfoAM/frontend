import Navigation from "./Navigation/Navigation";
import ChangeLanguages from "./ChangeLanguages/ChangeLanguages";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.div_header_img}>
        <img
          id="logo"
          alt="logo"
          title="logo"
          style={{ width: 60 }}
          src="./img/patient-clipart-patient-identification-19.png"
        />
      </div>
      <Navigation />
      <ChangeLanguages />
    </header>
  );
};

export default Header;
