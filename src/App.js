import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";

function App() {
  const [formValue, setFormValue] = useState("");
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("toDoList")) || []
  );
  const [idEdited, setIdEdited] = useState(null);
  const [titleEdited, setTitleEdited] = useState("");

  const sortTasks = (a, b) => {
    if (a.title < b.title) {
      return 1;
    }
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: formValue,
      status: false,
      id: Date.now(),
    };

    const updatedList = [...toDoList, newTask].sort(sortTasks);
    setToDoList(updatedList);
    setFormValue("");
    localStorage.setItem("toDoList", JSON.stringify(updatedList));
  };

  const onChange = (e) => {
    setFormValue(e.target.value);
  };

  const onItemChange = (e) => {
    setTitleEdited(e.target.value);
  };

  const onDeleteClick = (id) => {
    const updatedList = toDoList.filter((el) => el.id !== id);
    setToDoList(updatedList);
    localStorage.setItem("toDoList", JSON.stringify(updatedList));
  };

  const onCheckboxClick = (id) => {
    const updatedList = toDoList.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          status: !el.status,
        };
      }
      return { ...el };
    });
    setToDoList(updatedList);
    localStorage.setItem("toDoList", JSON.stringify(updatedList));
  };

  const onEditClick = (id) => {
    setIdEdited(id);
  };

  const onEditSubmit = (e, id) => {
    e.preventDefault();
    const updatedList = toDoList
      .map((el) => {
        if (el.id === id) {
          return {
            ...el,
            title: titleEdited,
          };
        }
        return { ...el };
      })
      .sort(sortTasks);
    setToDoList(updatedList);
    setIdEdited(null);
    setTitleEdited("");
    localStorage.setItem("toDoList", JSON.stringify(updatedList));
  };

  return (
    <>
      <Form onFormSubmit={onFormSubmit} value={formValue} onChange={onChange} />
      <ToDoList
        toDoList={toDoList}
        idEdited={idEdited}
        onDeleteClick={onDeleteClick}
        onCheckboxClick={onCheckboxClick}
        onEditClick={onEditClick}
        onEditSubmit={onEditSubmit}
        onItemChange={onItemChange}
      />
    </>
  );
}

export default App;
