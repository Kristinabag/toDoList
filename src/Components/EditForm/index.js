function EditForm({ task, onEditSubmit, titleEdited, onItemChange }) {
  return (
    <form onSubmit={(e) => onEditSubmit(e, task.id)} value={titleEdited}>
      <input
        onChange={onItemChange}
        value={titleEdited}
        title="newTitle"
        placeholder={task.title}
      />
      <button type="submit">Обновить</button>
    </form>
  );
}

export default EditForm;
