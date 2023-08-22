import classes from "./GetReview.module.css";

const GetReview = (props) => {
  return (
    <div>
      <h4>Отзывы:</h4>
      {props.doctorsSchedule[props.doctorID].reviews.map((review) => {
        return (
          <div key={review.text_of_review} className={classes.reviewBlock}>
            <p>
              Дата отзыва: <span>{review.date_of_review}</span>
            </p>
            <p>
              Дата визита: <span>{review.date_of_visit}</span>
            </p>
            <p>
              ID пациента: <span>{review.patient_id}</span>
            </p>
            <p>
              Номер телефона: <span>{review.phone_number}</span>
            </p>
            <p>
              Рейтинг: <span>{review.rating}</span>
            </p>
            <p>
              Отзыв: <span>{review.text_of_review}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default GetReview;
