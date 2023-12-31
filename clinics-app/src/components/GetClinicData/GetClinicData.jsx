import Review from "../Review/Review";
import styles from "./GetClinicData.module.css";

const GetClinicData = (props) => {
  const clinic = props.clinics;
  const id = props.clinicID;
  const address = clinic[id].clinicAddress;

  // const clinicSchedule = props.clinicSchedule;

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
      <div id={clinic[id].id} className={styles.data_block}>
        <small>
          Клиника c id = {clinic[id].id}, id можно поменять в src/redux/State и тогда подгрузится новая клиника и отзывы
          к ней
        </small>
        <div className={styles.info}>
          <img
            src={clinic[id].photoURL}
            alt={clinic[id].clinicName}
            title={clinic[id].clinicName}
            className={styles.img}
          />
          <div>
            <h1>
              <strong>{clinic[id].clinicName}</strong>
            </h1>
            <p>
              Адрес: {address.textAddress.city}, {address.textAddress.street}, дом {address.textAddress.building}, этаж{" "}
              {address.textAddress.floor}
            </p>
            <p>Специализация: {clinic[id].clinicSpecialisation}</p>
            <p>Рейтинг: {clinic[id].clinicRate}</p>
            <p>Телефон: {dataParser(clinic[id].clinicPhones)}</p>
            <p>Описание: {clinic[id].clinicInformation}</p>
            <p>
              Координаты: {address.coordinates[0]}, {address.coordinates[1]}
            </p>
            <p>Минимальная цена: {clinic[id].minimalPrice}</p>
          </div>
        </div>
      </div>
      <div className={styles.second__block}>
        <p>Социальные сети: {dataParser(clinic[id].clinicSocialNetworks, "", <br />)}</p>
        <p>Сервисы: {dataParserForServices(clinic[id].clinicServices, <br />)}</p>
        <p>Теги: {dataParser(clinic[id].clinicTags, <br />, "#")}</p>
      </div>
      <div>
        <h4 className={styles.h4__left}>Отзывы:</h4>
        {/* {clinicSchedule[id].reviews.map((review) => {
          return <Review review={review} key={review.text_of_review} />;
        })} */}
      </div>
    </div>
  );
};

export default GetClinicData;
