import React from "react";
import styles from "./AddData.module.css";

const AddData = (props) => {
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

  const callClinicData = () => {
    return addElement(props.addClinicData);
  };

  const changeInput = () => {
    const text = addTitle.current.value;
    props.myClinicPage.JSONForMyClinics[props.id].clinicName = text;
    callClinicData();
  };

  return (
    <>
      <p>
        <label>
          Название:
          <input
            type="text"
            onChange={changeInput}
            ref={addTitle}
            value={props.myClinicPage.JSONForMyClinics[props.id].clinicName}
          />
        </label>
      </p>
      <p>
        <label>
          Телефон:
          <input type="text" ref={addPhone} />
        </label>
      </p>
      <p>
        <label>
          Описание:
          <input type="text" ref={addDescription} />
        </label>
      </p>
      <button onClick={callClinicData}>Клик и мы меняем объект в State.jsx</button>
    </>
  );
};

export default AddData;
