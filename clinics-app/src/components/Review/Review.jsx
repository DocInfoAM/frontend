import styles from "./Review.module.css";

const Review = (props) => {
    return (
      <div  className={styles.single__review}>
        <div  className={styles.review__block__header}>
          <div>
            <p>
              <strong>Дата отзыва:</strong> {props.review.date_of_review}
            </p>
            <p>
              <strong>Дата визита:</strong> {props.review.date_of_visit}
            </p>
          </div>
          <div>
            <p>
              <strong>ID пациента:</strong> {props.review.patient_id}
            </p>
            <p>
              <strong>Номер телефона:</strong> {props.review.phone_number}
            </p>
          </div>
        </div>
        <p>
          <strong>Рейтинг:</strong> {props.review.rating}
        </p>
        <p>
          <strong>Отзыв:</strong> {props.review.text_of_review}
        </p>
      </div>
    );
};

export default Review