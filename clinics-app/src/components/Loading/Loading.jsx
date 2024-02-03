import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <div className={styles.loading_spinner}></div>
      <p>Loading data...</p>
    </div>
  );
};

export default Loading;
