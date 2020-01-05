import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";
import { addTodo } from "../actions";
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addTodo(text));
    }
  };
};
const AddToDoContainer = connect(null, mapDispatchToProps)(AddTodo);
export default AddToDoContainer;
