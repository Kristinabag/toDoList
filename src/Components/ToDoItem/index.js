import EditForm from "../EditForm";

function ToDoItem({
  task,
  idEdited,
  onDeleteClick,
  onCheckboxClick,
  onEditClick,
  onEditSubmit,
  itemValue,
  onItemChange,
}) {
  const checked = task.status ? "checked" : "";
  const style = task.status ? { textDecoration: "line-through" } : {};
  return (
    <div className="toDoItem">
      {idEdited === task.id ? (
        <EditForm
          task={task}
          onEditSubmit={onEditSubmit}
          itemValue={itemValue}
          onItemChange={onItemChange}
        />
      ) : (
        <>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onCheckboxClick(task.id)}
          ></input>
          <div className="task-title" style={style}>
            {task.title}
          </div>
          <button
            className="delete-button"
            onClick={() => onDeleteClick(task.id)}
          >
            Удалить
          </button>
          <button className="edit-button" onClick={() => onEditClick(task.id)}>
            Редактировать
          </button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
