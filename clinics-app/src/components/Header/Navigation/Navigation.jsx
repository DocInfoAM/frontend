import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <NavItem />
    </nav>
  );
};

const NavItem = () => {
  return (
    <>
      <NavLink to="/my-clinic" id="MyClinic" className={setActive}>
        <div className={classes.item}>Моя клиника</div>
      </NavLink>
      <NavLink to="/requests" id="Requests" className={setActive}>
        <div className={classes.item}>Заявки</div>
      </NavLink>
      <NavLink to="/schedule" id="Schedule" className={setActive}>
        <div className={classes.item}>Расписание врача</div>
      </NavLink>
      <NavLink to="/personal-area" id="PersonalArea" className={setActive}>
        <div className={classes.item}>Личный кабинет врача</div>
      </NavLink>
      <NavLink to="/all-doctors" id="AllDoctors" className={setActive}>
        <div className={classes.item}>Все врачи</div>
      </NavLink>
      <NavLink to="/contacts" id="Contacts" className={setActive}>
        <div className={classes.item}>Контакты</div>
      </NavLink>
      <NavLink to="/sign-out" id="SignOut" className={setActive}>
        <div className={classes.item}>Выход</div>
      </NavLink>
    </>
  );
};

const setActive = ({ isActive }) => (isActive ? classes.active : "");

export default Navigation;
