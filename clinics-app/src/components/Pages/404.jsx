import classes from "./index.module.css";
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div>
            <h2>Sorry, we can't find this page</h2>
            <Link to="/" className={classes.link}>Go to Home page</Link>
        </div>
    )
}

export default NotFoundPage