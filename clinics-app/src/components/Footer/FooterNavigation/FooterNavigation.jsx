import styles from "./FooterNavigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/terms-of-use" id="TermsOfUse">
        <div className={styles.item}>Пользовательское соглашение</div>
      </Link>
      <Link to="/password-recovery" id="PasswordRecovery">
        <div className={styles.item}>Восстановление доступа</div>
      </Link>
    </nav>
  );
};

export default Navigation;
