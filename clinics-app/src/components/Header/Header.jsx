import Navigation from "./Navigation/Navigation";
import ChangeLanguages from "./ChangeLanguages/ChangeLanguages";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.div_header_img}>
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
