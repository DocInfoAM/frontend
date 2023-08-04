import classes from "./AddData.module.css";
import React from "react";

const addTitle = React.createRef(); // создаём реф для того, что бы забрать данные из текстовых полей
const addDescription = React.createRef();
const addPhone = React.createRef();

const addElement = (addClinicData) => {
  const title = addTitle.current.value; // забираем значение из поля
  const description = addDescription.current.value;
  const phone = addPhone.current.value;
  addClinicData(title, phone, description); // вызываем функцию которую передали для обработки данных
  addTitle.current.value = "";
  addDescription.current.value = "";
  addPhone.current.value = "";
};

const AddData = (props) => {
  function callClinicData() {
    return addElement(props.addClinicData);
  }

  return (
    <>
      <p>
        <label>
          Название:
          <input type="text" ref={addTitle}></input>
        </label>
      </p>
      <p>
        <label>
          Телефон:
          <input type="text" ref={addPhone}></input>
        </label>
      </p>
      <p>
        <label>
          Описание:
          <input type="text" ref={addDescription}></input>
        </label>
      </p>

      {/* привязываем функцию для захвата данных на онклик и передаём параметром нашу пропсовую функцию */}
      <button onClick={callClinicData}>Клик и мы меняем объект в State.jsx</button>
    </>
  );
};

export default AddData;
