import Review from "../Review/Review";
import styles from "./GetClinicData.module.css";

const GetClinicData = (props) => {
  const dataParser = (data, symbolOne = "", symbolTwo = "") => {
    return data.map((x) => (
      <span key={x}>
        {symbolOne}
        {symbolTwo}
        {x}
      </span>
    ));
  };

  const dataParserForServices = (data, symbolOne = "", symbolTwo = "") => {
    return data.map((x) => (
      <span key={x.service}>
        {symbolOne}
        {symbolTwo}
        {x.service} - {x.price} драм
      </span>
    ));
  };

  return (
    <div className={styles.test_block}>
      <div className={styles.data_block}>
        <div className={styles.info}>
          <div>
            <p>Clinic data</p>
          </div>
        </div>
      </div>
      <div className={styles.second__block}></div>
      <div>
        <h4 className={styles.h4__left}>Отзывы:</h4>
      </div>
    </div>
  );
};

export default GetClinicData;
