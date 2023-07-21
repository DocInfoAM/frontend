import classes from "./Navigation.module.css";
import Item from "./Item/Item"

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <Item text="Ссылка 1" id="item1" link="/" />
      <Item text="Ссылка 2" id="item2" link="/" />
      <Item text="Ссылка 3" id="item3" link="/" />
    </nav>
  );
};

export default Navigation;
