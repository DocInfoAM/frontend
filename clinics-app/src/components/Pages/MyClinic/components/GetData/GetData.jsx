import classes from "./GetData.module.css";

const getData = (props) => {
  const clinic = props.clinics;
  const id = 0;
  const address = clinic[id].clinicAddress;

  const clinicSchedule = props.clinicSchedule;
  console.log(clinicSchedule);

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
    <div className={classes.test_block}>
      <div id={clinic[id].id} className={classes.data_block}>
        <h4>Клиника c id = {clinic[id].id}</h4>
        <div className={classes.info}>
          <img
            src={clinic[id].photoURL}
            alt={clinic[id].clinicName}
            title={clinic[id].clinicName}
            className={classes.img}
          />
          <div>
            <p>
              Название: <strong>{clinic[id].clinicName}</strong>
            </p>
            <p>Специализация: {clinic[id].clinicSpecialisation}</p>
            <p>Рейтинг: {clinic[id].clinicRate}</p>
            <p>
              Адрес: {address.textAddress.city}, {address.textAddress.street}, дом {address.textAddress.building}, этаж{" "}
              {address.textAddress.floor}
            </p>
            <p>
              Координаты: {address.coordinates[0]}, {address.coordinates[1]}
            </p>
            <p>Социальные сети: {dataParser(clinic[id].clinicSocialNetworks, "", <br />)}</p>
            <p>Минимальная цена: {clinic[id].minimalPrice}</p>
            <p>Сервисы: {dataParserForServices(clinic[id].clinicServices, <br />)}</p>
            <p>Теги: {dataParser(clinic[id].clinicTags, <br />, "#")}</p>
            <p>Телефон: {dataParser(clinic[id].clinicPhones, <br />)}</p>
            <p>Описание: {clinic[id].clinicInformation}</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Отзывы:</h4>
          {clinicSchedule[id].reviews.map((x) => {
            return (
              <div key={x.text_of_review} className={classes.singleReview}>
                <p>Дата отзыва: {x.date_of_review}</p>
                <p>Дата визита: {x.date_of_visit}</p>
                <p>ID пациента: {x.patient_id}</p>
                <p>Номер телефона: {x.phone_number}</p>
                <p>Рейтинг: {x.rating}</p>
                <p>Отзыв: {x.text_of_review}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default getData;
