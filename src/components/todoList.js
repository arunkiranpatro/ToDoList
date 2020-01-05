import React from "react";
import ToDo from "./todo";

const ToDoList = ({todos =[]}) =>{
    return (<ul className="todo-list">
            {
                todos.map((todo,id)=><ToDo text={todo.text} key={id}/>)
            }
    </ul>);
};

export default ToDoList;