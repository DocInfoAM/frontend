import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/myclinic" id="MyClinic">
        <div className={classes.item}>Моя клиника</div>
      </Link>
      <Link to="/claims" id="Claims">
        <div className={classes.item}>Заявки</div>
      </Link>
      <Link to="/schedule" id="Schedule">
        <div className={classes.item}>Расписание</div>
      </Link>
      <Link to="/personalarea" id="PersonalArea">
        <div className={classes.item}>Личный кабинет врача</div>
      </Link>
      <Link to="/alldoctors" id="AllDoctors">
        <div className={classes.item}>Все врачи</div>
      </Link>
      <Link to="/contacts" id="Contacts">
        <div className={classes.item}>Контакты</div>
      </Link>
      <Link to="/signout" id="SignOut">
        <div className={classes.item}>Выход</div>
      </Link>
    </nav>
  );
};

export default Navigation;
