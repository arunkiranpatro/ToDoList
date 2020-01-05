import React from "react";

const AddTodo = function({ onSubmit }) {
  function addTask(e) {
    e.preventDefault();
    let taskValue = document.getElementById("task");
    onSubmit(taskValue.value);
    taskValue.value = "";
  }
  return (
    <form onSubmit={addTask}>
      <input type="text" id="task" />
      <button type="submit" className="add-task">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
