import GetAllDoctorsData from "../../components/GetAllDoctorsData/GetAllDoctorsData";
import styles from "./AllDoctors.module.css";

const AllDoctors = (props) => {
  return (
    <div className={styles.doctors__cards}>
      <GetAllDoctorsData />
    </div>
  );
};

export default AllDoctors;
