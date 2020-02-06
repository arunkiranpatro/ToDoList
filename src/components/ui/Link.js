import React, { Children } from "react";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <a className="selected">{children}</a>;
  }
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
