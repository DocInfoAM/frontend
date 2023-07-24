import classes from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link id={props.id} to={props.link}>
      <div className={classes.item}>{props.text}</div>
    </Link>
  );
};

export default Item;
