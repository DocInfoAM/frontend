import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = ({ navItems }) => {
  return (
    <nav className={classes.nav}>
      <NavItem navItems={navItems} />
    </nav>
  );
};

const NavItem = ({ navItems }) => {
  return navItems.map((data) => (
    <NavLink to={data.url} id={data.id} className={setActive} key={data.id}>
      <div className={classes.item}>{data.name}</div>
    </NavLink>
  ));
};

const setActive = ({ isActive }) => (isActive ? classes.active : "");

export default Navigation;
