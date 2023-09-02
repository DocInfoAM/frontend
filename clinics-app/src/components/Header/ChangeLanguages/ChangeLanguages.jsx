import styles from "./ChangeLanguages.module.css";

const ChangeLanguages = () => {
  return (
    <div className={styles.change_languages}>
      <p>
        <span className={`${styles.flag_icon} ${styles.flag_icon_arm}`} id="arm"></span>
        {/* <span className="flag_icon flag_icon_rus" id="rus"></span> */}
        <span className={`${styles.flag_icon} ${styles.flag_icon_gbr}`} id="gbr"></span>
      </p>
    </div>
  );
};

export default ChangeLanguages;
