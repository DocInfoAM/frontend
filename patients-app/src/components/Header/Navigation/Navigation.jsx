import { Link } from "react-router-dom";
import classes from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav>
            <Link to="/terms" id="Terms">
                <div className={classes.item}>Пользовательское Соглашение</div>
            </Link>
        </nav>
    )
}

export default Navigation