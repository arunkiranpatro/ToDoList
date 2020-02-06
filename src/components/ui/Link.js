import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <a className="selected">{children}</a>;
  }
  return (
    <a
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};
export default Link;
