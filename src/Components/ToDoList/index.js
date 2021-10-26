import ToDoItem from "../ToDoItem";

function ToDoList({
  toDoList,
  idEdited,
  onDeleteClick,
  onCheckboxClick,
  onEditClick,
  onEditSubmit,
  titleEdited,
  onItemChange,
}) {
  return toDoList.map((task) => (
    <ToDoItem
      task={task}
      key={task.id}
      idEdited={idEdited}
      onDeleteClick={onDeleteClick}
      onCheckboxClick={onCheckboxClick}
      onEditClick={onEditClick}
      onEditSubmit={onEditSubmit}
      titleEdited={titleEdited}
      onItemChange={onItemChange}
    />
  ));
}

export default ToDoList;
