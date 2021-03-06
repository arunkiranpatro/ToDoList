import { connect } from "react-redux";
import { setVisibilityFilter } from "../../actions/actions";
import Link from "../ui/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  text: ownProps.text
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
