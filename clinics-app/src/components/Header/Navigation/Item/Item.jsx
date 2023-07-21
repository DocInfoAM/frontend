import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <a id={props.id} href={props.link}>
      <div className={classes.item}>{props.text}</div>
    </a>
  );
};

export default Item;
