import React from "react";
import PropTypes from "prop-types";

const ToDo = ({ text, onClick = f => f, completed = true, uniqueID }) => (
  <li
    className="todo"
    onClick={onClick}
    style={{ textDecoration: completed ? "line-through" : "none" }}
    uniqueid={uniqueID}
  >
    {text}
  </li>
);

ToDo.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  uniqueID: PropTypes.string
};
export default ToDo;
