import React from "react";

const ToDo = ({ text, onClick = f => f, completed = true,uniqueID }) => {
  return (
    <li
      className="todo"
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
      uniqueid={uniqueID}
    >
      {text}

    </li>
  );
};

export default ToDo;
