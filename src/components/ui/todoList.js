import React from "react";
import PropTypes from "prop-types";
import ToDo from "./todo";

const ToDoList = ({ todos = [], toggleTodoWrapper }) => (
  <ul className="todo-list">
    {todos.map((todo, id) => (
      <ToDo
        text={todo.text}
        completed={todo.completed}
        onClick={() => toggleTodoWrapper(id, todo._id)}
        key={id}
        uniqueID={todo._id}
      />
    ))}
  </ul>
);
ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      completed: PropTypes.bool,
      onClick: PropTypes.func,
      uniqueID: PropTypes.string
    })
  ),
  onTodoClick: PropTypes.func
};
export default ToDoList;
