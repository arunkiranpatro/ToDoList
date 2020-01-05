import { connect } from "react-redux";
import AddTodo from "../ui/AddTodo";
import { addTask } from "../../actions";
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addTask(text));
    }
  };
};
const AddToDoContainer = connect(null, mapDispatchToProps)(AddTodo);
export default AddToDoContainer;
