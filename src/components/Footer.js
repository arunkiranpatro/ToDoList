import React from "react";
import FilterLink from "../container/FilterLink";
import { VisibilityFilters } from "../constants";
const Footer = () => (
  <nav className="menu">
    <FilterLink filter={VisibilityFilters.SHOW_ALL} text="All" />

    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} text="Active" />

    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} text="Completed" />
  </nav>
);
export default Footer;
