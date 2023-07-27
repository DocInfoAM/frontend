import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/my-clinic" id="MyClinic" className={({ isActive }) => (isActive ? classes.active : "")}>
        <div className={classes.item}>Моя клиника</div>
      </NavLink>
      <NavLink to="/claims" id="Claims" className={({ isActive }) => (isActive ? classes.active : "")}>
        <div className={classes.item}>Заявки</div>
      </NavLink>
      <NavLink to="/schedule" id="Schedule" className={({ isActive }) => (isActive ? classes.active : "")}>
        <div className={classes.item}>Расписание врача</div>
      </NavLink>
      <NavLink to="/personal-area" id="PersonalArea" className={({ isActive }) => (isActive ? classes.active : "")}>
        <div className={classes.item}>Личный кабинет врача</div>
      </NavLink>
      <NavLink to="/all-doctors" id="AllDoctors" className={({ isActive }) => (isActive ? classes.active : "")}>
        <div className={classes.item}>Все врачи</div>
      </NavLink>
      <NavLink to="/contacts" id="Contacts" className={({ isActive }) => (isActive ? classes.active : "")}>
        <div className={classes.item}>Контакты</div>
      </NavLink>
      <NavLink to="/sign-out" id="SignOut" className={({ isActive }) => (isActive ? classes.active : "")}>
        <div className={classes.item}>Выход</div>
      </NavLink>
    </nav>
  );
};

export default Navigation;
