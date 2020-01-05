import React from "react";

const Link = ({ active, text, onClick }) => {
  if (active) {
    return <a className="selected">{text}</a>;
  }
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </a>
  );
};

export default Link;
