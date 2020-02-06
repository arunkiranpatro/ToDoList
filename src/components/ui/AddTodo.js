import React from "react";
import PropTypes from "prop-types";

const AddTodo = function({ onSubmit }) {
  let _task;
  function addTask(e) {
    e.preventDefault();
    onSubmit(_task.value);
    _task.value = "";
  }
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        ref={input => {
          _task = input;
          return _task;
        }}
      />
      <button type="submit" className="add-task">
        Add Task
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  onSubmit: PropTypes.func
};
export default AddTodo;
