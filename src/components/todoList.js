import React from "react";
import ToDo from "./todo";

const ToDoList = ({ todos = [], onTodoClick }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, id) => (
        <ToDo
          text={todo.text}
          completed={todo.completed}
          onClick={() => onTodoClick(id)}
          key={id}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
