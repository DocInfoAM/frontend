import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading data...</p>
    </div>
  );
};

export default Loading;
