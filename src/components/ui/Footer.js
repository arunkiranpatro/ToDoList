import React from "react";
import FilterLink from "../container/FilterLink";
import { VisibilityFilters } from "../../constants";
const Footer = () => (
  <nav className="menu">
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} >Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} >Active</FilterLink>
  </nav>
);
export default Footer;
