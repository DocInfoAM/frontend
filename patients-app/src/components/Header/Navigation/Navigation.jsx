import { Link } from "react-router-dom";
import classes from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav>
            <Link to="/doctors" id="Doctors">
                <div className={classes.item}>Поиск По Врачам</div>
            </Link>
            <Link to="/clinics" id="Clinics">
                <div className={classes.item}>Поиск По Клиникам</div>
            </Link>
            <Link to="/dashboard" id="Dashboard">
                <div className={classes.item}>Личный Кабинет</div>
            </Link>
            <Link to="/terms" id="Terms">
                <div className={classes.item}>Пользовательское Соглашение</div>
            </Link>
            <Link to="/contacts" id="Contacts">
                <div className={classes.item}>Контакты</div>
            </Link>
            <Link to="/login" id="Login">
                <div className={classes.item}>Выйти</div>
            </Link>
        </nav>
    )
}

export default Navigation