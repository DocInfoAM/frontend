import classes from "./AddData.module.css";

// отрисовываем все данные, которые есть в index.js
const AddData = (props) => {
  return (
    <>
      <p>
        <label>
          Название:
          <input type="text" ref={props.addTitle}></input>
        </label>
      </p>
      <p>
        <label>
          Ссылка на фото:
          <input type="text" ref={props.addPhotoURL}></input>
        </label>
      </p>
      <p>
        <label>
          Телефон:
          <input type="text" ref={props.addPhone}></input>
        </label>
      </p>
      {/* привязываем функцию для захвата данных на онклик */}
      <button onClick={props.addElement}>
        Нажатием сюда мы добавим данные про клинику в переменную в index.js, но пока что не можем отрисовать их
      </button>
    </>
  );
};

export default AddData;
