import React from "react";
import ToDo from "./todo";

const ToDoList = ({ todos = [], onTodoClick }) => (
  <ul className="todo-list">
    {todos.map((todo, id) => (
      <ToDo
        text={todo.text}
        completed={todo.completed}
        onClick={() => onTodoClick(id, todo._id)}
        key={id}
        uniqueID={todo._id}
      />
    ))}
  </ul>
);

export default ToDoList;
