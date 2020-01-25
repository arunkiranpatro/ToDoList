import React from "react";

const AddTodo = function({ onSubmit }) {
  let _task;
  function addTask(e) {
    e.preventDefault();
    onSubmit(_task.value);
    _task.value = "";
  }
  return (
    <form onSubmit={addTask}>
      <input type="text" ref={input => (_task = input)} />
      <button type="submit" className="add-task">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
