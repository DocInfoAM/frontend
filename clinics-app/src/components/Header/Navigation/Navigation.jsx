import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Моя клиника", url: "/my-clinic", id: "MyClinic" },
  { name: "Заявки", url: "/claims", id: "Claims" },
  { name: "Расписание врача", url: "/schedule", id: "Schedule" },
  { name: "Личный кабинет врача", url: "/personal-area", id: "PersonalArea" },
  { name: "Все врачи", url: "/all-doctors", id: "AllDoctors" },
  { name: "Контакты", url: "/contacts", id: "Contacts" },
  { name: "Выход", url: "/sign-out", id: "SignOut" },
];

const NavItem = () => {
  return navItems.map((data) => (
    <NavLink to={data.url} id={data.id} className={setActive} key={data.id}>
      <div className={classes.item}>{data.name}</div>
    </NavLink>
  ));
};

const setActive = ({ isActive }) => (isActive ? classes.active : "");

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <NavItem />
    </nav>
  );
};

export default Navigation;
