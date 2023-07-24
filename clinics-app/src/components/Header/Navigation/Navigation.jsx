import classes from "./Navigation.module.css";
import Item from "./Item/Item"

const Navigation = () => {
  return (
    <nav className={classes.nav}>

      <Item text="Моя клиника" id="item1" link="/myclinic" />
      <Item text="Заявки" id="item2" link="/claims" />
      <Item text="Расписание" id="item3" link="/" />
      <Item text="Личный кабинет врача" id="item4" link="/" />
      <Item text="Все врачи" id="item5" link="/" />
      <Item text="Контакты" id="item6" link="/" />
      <Item text="Выход" id="item7" link="/" />
    </nav>
  );
};

export default Navigation;