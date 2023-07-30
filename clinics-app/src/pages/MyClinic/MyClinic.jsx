import { Link } from "react-router-dom";

const MyClinic = () => {
  return (
    <div>
      <h2>My clinic page</h2>
      <p>
        <Link to="/statistics">Статистика по клинике</Link>
      </p>
      <p>
        <Link to="/account-balance">Баланс клиники</Link>
      </p>
      <br />
      <br />
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
        <li>clinicServices: [ {`{ service : string, price : number }`}, {`{ service : string, price : number }`} ]</li>
        <li>clinicTags: ["string", "string", "string"]</li>
        <li>clinicInformation: string</li>
      </ul>
      <h2>Логика</h2>
      <p>Проверяем залогирован ли пользователь (по данным из браузера):</p>
      <p>
        Если <strong>"НЕТ"</strong> - перенаправляем на index.jsx (Страницу логина)
      </p>
      <p>
        Если <strong>"ДА"</strong> - делаем запрос на сервер, в ответе должны получить объект с данными о клинике, а так
        же информацией о роли (администратор или врач), если пользователь администратор, то он имеет возможность
        редактирования данных о клинике. Данные должны содержать ссылку на логотип клиники, информацию о клинике,
        рейтинг и отзывы.
      </p>
      <br />
      <br />
    </div>
  );
};

export default MyClinic;
