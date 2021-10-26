function Form({ onFormSubmit, value, onChange }) {
  return (
    <form className="new-task-form" onSubmit={onFormSubmit} value={value}>
      <input
        onChange={onChange}
        value={value}
        title="taskName"
        placeholder="Какую задачу вам нужно сделать?"
      />
      <button type="submit">Добавить задачу в список</button>
    </form>
  );
}

export default Form;
