import React from "react";
import ToDoList from "./todoList";

const App = ({todos=[]}) =>{
    return (<div className ="todo-app">
            <ToDoList todos={todos}/>
    </div>);
}

export default App;