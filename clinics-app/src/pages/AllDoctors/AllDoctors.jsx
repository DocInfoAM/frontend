import GetAllDoctorsData from "../../components/GetAllDoctorsData/GetAllDoctorsData";
import styles from "./AllDoctors.module.css";

const AllDoctors = (props) => {
  return (
    <div className={styles.doctors__cards}>
      <GetAllDoctorsData
        doctors={props.doctors}
        // doctorsSchedule={props.doctorsSchedule}
      />
    </div>
  );
};

export default AllDoctors;
