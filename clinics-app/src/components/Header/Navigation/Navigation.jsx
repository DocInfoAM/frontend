import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/myclinic"><div className={classes.item}>Моя клиника</div></Link>
      <Link to="/claims"><div className={classes.item}>Заявки</div></Link>
      <Link to="/schedule"><div className={classes.item}>Расписание</div></Link>
      <Link to="/personalarea"><div className={classes.item}>Личный кабинет врача</div></Link>
      <Link to="/alldoctors"><div className={classes.item}>Все врачи</div></Link>
      <Link to="/contacts"><div className={classes.item}>Контакты</div></Link>
      <Link to="/signout"><div className={classes.item}>Выход</div></Link>
    </nav>
  );
};

export default Navigation;