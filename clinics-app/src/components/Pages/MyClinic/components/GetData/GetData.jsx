import classes from "./GetData.module.css";

const getData = (props) => {
  const clinic = props.myClinicPage.JSONForMyClinics[props.id];
  const address = clinic.clinicAddress.textAddress;

  return (
    <div className={classes.test_block}>
      <div id={clinic.id} className={classes.data_block}>
        <h4>Клиника c id = {clinic.id}</h4>
        <div className={classes.info}>
          <img src={clinic.photoURL} alt={clinic.clinicName} title={clinic.clinicName} className={classes.img} />
          <div>
            <p>Название: <strong>{clinic.clinicName}</strong></p>
            <p>Специализация: {clinic.clinicSpecialisation}</p>
            <p>Рейтинг: {clinic.clinicRate}</p>
            <p>
              Адрес: {address.city}, {address.street}, дом {address.building}, этаж {address.floor}
            </p>
            <p>Координаты: {clinic.clinicAddress.coordinates[0]}, {clinic.clinicAddress.coordinates[1]}</p>
            <p>Социальные сети: {clinic.clinicSocialNetworks[0]}</p>
            <p>Минимальная цена: {clinic.minimalPrice}</p>
            <p>Сервисы: {clinic.clinicServices[0].service} - {clinic.clinicServices[0].price} драм</p>
            <p>Теги: {clinic.clinicTags}</p>
            <p>Телефон: {clinic.clinicPhones}</p>
            <p>Описание: {clinic.clinicInformation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getData;
