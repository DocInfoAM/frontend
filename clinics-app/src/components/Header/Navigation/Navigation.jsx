import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../../context/UserProvider";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavItem />
    </nav>
  );
};

const NavItem = () => {
  const { id } = useUser();
  const { getOut } = useUser();

  return (
    <>
      {id ? (
        <>
          <NavLink to="/my-clinic" id="MyClinic" className={setActive}>
            <div className={styles.item}>Моя клиника</div>
          </NavLink>
          <NavLink to="/requests" id="Requests" className={setActive}>
            <div className={styles.item}>Заявки</div>
          </NavLink>
          <NavLink to="/schedule" id="Schedule" className={setActive}>
            <div className={styles.item}>Расписание врача</div>
          </NavLink>
          <NavLink to="/personal-area" id="PersonalArea" className={setActive}>
            <div className={styles.item}>Личный кабинет врача</div>
          </NavLink>
          <NavLink to="/all-doctors" id="AllDoctors" className={setActive}>
            <div className={styles.item}>Все врачи</div>
          </NavLink>
          <NavLink to="/contacts" id="Contacts" className={setActive}>
            <div className={styles.item}>Контакты</div>
          </NavLink>
          <NavLink to="/" id="SignOut" className={setActive} onClick={getOut}>
            <div className={styles.item}>Выход</div>
          </NavLink>
        </>
      ) : (
        "Добро пожаловать, выполните вход!"
      )}
    </>
  );
};

const setActive = ({ isActive }) => (isActive ? styles.active : "");

export default Navigation;
