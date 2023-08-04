import classes from "./AddData.module.css";
import React from "react";

const addTitle = React.createRef(); // создаём реф для того, что бы забрать данные из текстовых полей
const addDescription = React.createRef();
const addPhone = React.createRef();

const addElement = (addClinicData) => {
  const title = addTitle.current.value; // забираем значение из поля
  const description = addDescription.current.value; 
  const phone = addPhone.current.value; 
  addClinicData(title, phone, description); // вызываем функцию из пропсов для обработки данных
};

const AddData = (props) => {
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
      <button onClick={() => addElement(props.addClinicData)} >
        Нажатием сюда мы добавим данные про клинику в переменную в index.js, но пока что не можем отрисовать их
      </button>
    </>
  );
};

export default AddData;
