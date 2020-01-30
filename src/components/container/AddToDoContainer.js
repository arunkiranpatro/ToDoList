import { connect } from "react-redux";
import AddTodo from "../ui/AddTodo";
import { addTask } from "../../actions/actions";

const mapDispatchToProps = { onSubmit: addTask };

const AddToDoContainer = connect(null, mapDispatchToProps)(AddTodo);
export default AddToDoContainer;
