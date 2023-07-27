import classes from "./FooterNavigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/terms-of-use" id="TermsOfUse">
        <div className={classes.item}>Пользовательское соглашение</div>
      </Link>
      <Link to="/password-recovery" id="PasswordRecovery">
        <div className={classes.item}>Восстановление доступа</div>
      </Link>
    </nav>
  );
};

export default Navigation;
