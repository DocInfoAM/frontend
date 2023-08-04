import React from "react";
import { Link } from "react-router-dom";
import classes from "./MyClinic.module.css";
import GetData from "./components/GetData/GetData";
import AddData from "./components/AddData/AddData";

const MyClinic = (props) => {
  return (
    <div>
      <h2>My clinic page</h2>
      <h3>Тестовый GET запрос будет ниже</h3>
      {/* привязываем поле для того, что бы забрать данные из него */}
      <GetData JSONForMyClinics={props.JSONForMyClinics} id={props.id} />
      <AddData addClinicData={props.addClinicData} />
      <br />
      <br />
      <div>
        <h3>Ссылки</h3>
        <p>
          <Link to="/statistics">Статистика по клинике</Link>
        </p>
        <p>
          <Link to="/account-balance">Баланс клиники</Link>
        </p>
        <br />
        <br />
        <h3>Заметки</h3>
        <p>
          GET - информация о клинике, должны предать id клиники, на что получить объект с полями 1. url фото 2. название
          клиники 3. профиль (специализация, направление) 4. рейтинг 5. адрес 6. номера телефонов 7. соцсети 8.
          минимальная стоимость приёма 9. услуги и их стоимость 10. теги со специализациями 11. допинфо текстовое поле.
        </p>
        <ul>
          <li>urlPhoto: string</li>
          <li>clinicName: string</li>
          <li>clinicSpecialisation: string</li>
          <li>clinicRate: number</li>
          <li>clinicAddress: (textAddress: string, coordinates: string)</li>
          <li>clinicPhones: ["string", "string", "string"]</li>
          <li>clinicSocialNetworks: ["string", "string", "string"]</li>
          <li>minimalPrice: number</li>
          <li>
            clinicServices: [ {`{ service : string, price : number }`}, {`{ service : string, price : number }`} ]
          </li>
          <li>clinicTags: ["string", "string", "string"]</li>
          <li>clinicInformation: string</li>
        </ul>
        <h3>Логика</h3>
        <p>Проверяем залогирован ли пользователь (по данным из браузера):</p>
        <p>
          Если <strong>"НЕТ"</strong> - перенаправляем на index.jsx (Страницу логина)
        </p>
        <p>
          Если <strong>"ДА"</strong> - делаем запрос на сервер, в ответе должны получить объект с данными о клинике, а
          так же информацией о роли (администратор или врач), если пользователь администратор, то он имеет возможность
          редактирования данных о клинике. Данные должны содержать ссылку на логотип клиники, информацию о клинике,
          рейтинг и отзывы.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default MyClinic;
