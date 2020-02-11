import { connect } from "react-redux";
import ToDoList from "../ui/todoList";
import { toggleTodoWrapper } from "../../actions/actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};
const mapStateToProps = (state /* , ownProps */) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id, uniqueid) => {
    dispatch(toggleTodoWrapper(id, uniqueid));
  }
});
const VisibleToDoList = connect(mapStateToProps, { toggleTodoWrapper })(
  ToDoList
);
export default VisibleToDoList;
