import Review from "../Review/Review";
import styles from "./GetClinicData.module.css";
import { useUser } from "../../context/UserProvider";

const GetClinicData = (props) => {
  const { email, id, phone, roles } = useUser();

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
            <p>My id: {id}</p>
            <p>My email: {email}</p>
            <p>My phone: {phone}</p>
            <p>
              My roles:{" "}
              {roles.map((el) => (
                <span key={el}>{el}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.second__block}></div>
      <div>
        <h4 className={styles.h4__left}>Отзывы:</h4>
      </div> */}
    </div>
  );
};

export default GetClinicData;
