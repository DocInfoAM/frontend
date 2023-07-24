import classes from "./ChangeLanguages.module.css";

const ChangeLanguages = () => {
  return (
    <div className={classes.change_languages}>
      <p>
        <span className={`${classes.flag_icon} ${classes.flag_icon_arm}`} id="arm"></span>
        {/* <span className="flag_icon flag_icon_rus" id="rus"></span> */}
        <span className={`${classes.flag_icon} ${classes.flag_icon_gbr}`} id="gbr"></span>
      </p>
    </div>
  );
};

export default ChangeLanguages;
